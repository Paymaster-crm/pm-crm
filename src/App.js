import "./App.scss";
import { UserContext } from "./contexts/UserContext";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { navigateWithKeyboard } from "./utils/navigateWithKeyboard";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => navigateWithKeyboard(event, navigate);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  const handleLogout = useCallback(async () => {
    try {
      await axios(`${process.env.REACT_APP_API_STRING}/logout`, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }, [navigate]);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios(
          `${process.env.REACT_APP_API_STRING}/verify-user/`,
          { withCredentials: true }
        );

        if (res.data.user) {
          setUser(res.data.user);
        } else {
          setUser(null);
          navigate("/");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
        navigate("/");
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [navigate]);

  // Inactivity timeout
  useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        handleLogout(); // Log out user after 1 hour of inactivity
      }, 3600000);
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
  }, [handleLogout]);

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
