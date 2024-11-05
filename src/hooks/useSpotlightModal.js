import React from "react";

function useSpotlightModal(user) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key === " ") {
        event.preventDefault();
        // Open the modal only if the user is logged in
        if (user) {
          handleOpen();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [user]);
  return { open, handleOpen, handleClose };
}

export default useSpotlightModal;
