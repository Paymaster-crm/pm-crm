// hooks/useOnlineStatus.js
import { useEffect } from "react";

const useOnlineStatus = () => {
  useEffect(() => {
    const handleOnline = () => {
      alert("You are back online!");
    };

    const handleOffline = () => {
      alert("No internet connection!");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
};

export default useOnlineStatus;
