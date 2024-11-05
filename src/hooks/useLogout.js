import { useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useLogout(setUser) {
  const navigate = useNavigate();
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
  }, [navigate, setUser]);
  return handleLogout;
}

export default useLogout;
