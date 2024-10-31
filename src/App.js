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
  useInactivityTimeout();
  useOnlineStatus();
  useCookiesCheck();

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
