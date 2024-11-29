import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { style } from "../utils/modalStyle";

function EventModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.events.map((event, id) => (
            <div className="title" key={id}>
              <h1>{event.message}</h1>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

export default React.memo(EventModal);
