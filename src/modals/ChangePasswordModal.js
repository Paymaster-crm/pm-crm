import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "react-bootstrap";
import ChangePassword from "../components/home/ChangePassword";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

export default function ChangePasswordModal(props) {
  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    props.handleCloseModal();
  };

  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={handleClose} // Use custom handleClose
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: { backgroundColor: "transparent" } }} // Optional: Modify the backdrop
      >
        <Box sx={style}>
          <Container style={{ margin: "20px 0" }}>
            <ChangePassword />
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
