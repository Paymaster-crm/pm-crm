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

  const generateToken = async () => {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: process.env.REACT_APP_VAPID_KEY,
      });
      console.log(token);
      if (user) {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/save-fcm-token`,
          { fcmToken: token, username: user.username },
          {
            withCredentials: true,
          }
        );
        console.log(res.data.message);
      }
    }
  };

  useEffect(() => {
    generateToken();
    // eslint-disable-next-line
  }, [user]);

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
