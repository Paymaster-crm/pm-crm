import "./App.scss";
import { UserContext } from "./contexts/UserContext";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { navigateWithKeyboard } from "./utils/navigateWithKeyboard";
import CircularProgress from "@mui/material/CircularProgress";
import useCookiesCheck from "./customHooks/useCookiesCheck";
import useInactivityTimeout from "./customHooks/useInactivityTimeout";
import useUserVerification from "./customHooks/useUserVerification";
import useOnlineStatus from "./customHooks/useOnlineStatus";
import useLogout from "./customHooks/useLogout";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";
import axios from "axios";
import notificationAudio from "./assets/audio/notification-audio.wav";

function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleLogout = useLogout(setUser);
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => navigateWithKeyboard(event, navigate);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  const loading = useUserVerification(setUser);
  useInactivityTimeout(handleLogout);
  useOnlineStatus();
  useCookiesCheck();

  // Generate FCM token function
  const generateToken = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      try {
        const token = await getToken(messaging, {
          vapidKey: process.env.REACT_APP_VAPID_KEY,
        });
        setFcmToken(token);
      } catch (error) {
        console.error("Error generating token:", error);
      }
    }
  };

  // Save FCM token function
  const saveToken = async (token) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_STRING}/save-fcm-token`,
        { fcmToken: token, username: user.username },
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  // Generate token when the component mounts or user changes
  useEffect(() => {
    generateToken();
  }, [user]);

  // Save token in db whenever fcmToken changes
  useEffect(() => {
    if (fcmToken && user) {
      saveToken(fcmToken);
    }
  }, [fcmToken, user]);

  useEffect(() => {
    const audio = new Audio(notificationAudio);
    onMessage(messaging, (payload) => {
      console.log("Notification received: ", payload);
      audio.play().catch((error) => console.error("Audio play error:", error));
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      <div className="App">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </div>
        ) : user ? (
          <HomePage />
        ) : (
          <LoginPage />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default React.memo(App);
