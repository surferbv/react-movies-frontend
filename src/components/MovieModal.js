import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default function MovieModal(props) {

  const open = props.open;
  const setOpen = props.setOpen;
  const id = props.id;
  const actionType = props.actionType;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {actionType}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Select came from {id} action type {actionType}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
