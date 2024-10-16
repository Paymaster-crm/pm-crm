import "./App.scss";
import { UserContext } from "./contexts/UserContext";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  // Retrieve the user from session storage
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("crm_user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const ctrlShiftLeftArrow =
        event.ctrlKey && event.shiftKey && event.key === "ArrowLeft" && !isMac;
      const cmdShiftLeftArrow =
        event.metaKey && event.shiftKey && event.key === "ArrowLeft" && isMac;
      const ctrlShiftRightArrow =
        event.ctrlKey && event.shiftKey && event.key === "ArrowRight" && !isMac;
      const cmdShiftRightArrow =
        event.metaKey && event.shiftKey && event.key === "ArrowRight" && isMac;

      if (ctrlShiftLeftArrow || cmdShiftLeftArrow) {
        navigate(-1); // Go back to the previous page
      } else if (ctrlShiftRightArrow || cmdShiftRightArrow) {
        navigate(1); // Go forward to the next page
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  // Update session storage when the user changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("crm_user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("crm_user");
    }
  }, [user]);

  // Function to log out the user
  const handleLogout = () => {
    setUser(null); // Clear user state
    sessionStorage.removeItem("crm_user"); // Remove user from session storage
    navigate("/"); // Navigate to the login page
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Log out the user on tab close
      handleLogout();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleLogout]);

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
  }, [handleLogout]);

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      <div className="App">{user ? <HomePage /> : <LoginPage />}</div>
    </UserContext.Provider>
  );
}

export default React.memo(App);
