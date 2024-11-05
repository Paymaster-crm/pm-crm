import { useEffect } from "react";

function useFullScreen() {
  const openFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Shift + S (Shift key and 'S' key)
      if (event.shiftKey && event.key === "S") {
        openFullscreen();
      }

      // Check for Ctrl + F (Control key and 'F' key)
      if (event.ctrlKey && event.key === "f") {
        openFullscreen();
      }
    };

    // Attach event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export default useFullScreen;
