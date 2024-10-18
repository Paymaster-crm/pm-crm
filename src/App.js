import "./App.scss";
import { UserContext } from "./contexts/UserContext";
import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import { useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { navigateWithKeyboard } from "./utils/navigateWithKeyboard";
import axios from "axios";

function App() {
  // Retrieve the user from session storage
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => navigateWithKeyboard(event, navigate);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  // Function to log out the user using useCallback
  const handleLogout = useCallback(async () => {
    try {
      // Request the backend to clear the cookie
      await axios.post(
        `${process.env.REACT_APP_API_STRING}/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }, [navigate]);

  useEffect(() => {
    async function getUser() {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/verify-user/`,
        {
          withCredentials: true,
        }
      );
      if (res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
        navigate("/");
      }
    }

    getUser();
    // eslint-disable-next-line
  }, []);

  // Inactivity timeout
  useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        handleLogout(); // Log out user after 30 minutes of inactivity
      }, 1800000);
    };

    // Add event listeners for activity
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("touchstart", resetTimer);

    // Initialize timer on mount
    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      // Cleanup event listeners
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
    };
  }, [handleLogout]); // handleLogout is stable now

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      <div className="App">{user ? <HomePage /> : <LoginPage />}</div>
    </UserContext.Provider>
  );
}

export default React.memo(App);
