import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../config/axiosConfig";

function useLogout(user, setUser) {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const handleLogout = async () => {
    try {
      // Send logout request to the server
      await apiClient.post(`/logout`, {
        token: user?.sessionID,
        username: user?.username,
      });

      // Preserve the theme before clearing localStorage
      const theme = localStorage.getItem("theme");

      // Clear all localStorage data
      localStorage.clear();

      // Restore the theme
      if (theme) {
        localStorage.setItem("theme", theme);
      }

      // Reset user state and navigate
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === "l"
      ) {
        event.preventDefault();
        handleLogout();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleLogout]);
  return handleLogout;
}

export default useLogout;
