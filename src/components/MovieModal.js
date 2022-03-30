import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

  const [data, setData] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
      setOpen(false);
      setData([]);
    };
    const handleUpdate = () =>{
        fetch("http://localhost:3001/movies/", {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // DATA NEEDS TO CHANGE
        })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            setData(result);
          },
          (error) => {
            console.log("Error:");
            console.log(error);
          }
        );
    } 

  React.useEffect(() => {
    if (actionType === "show") {
      fetch(`http://localhost:3001/movies/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            setData(result);
          },
          (error) => {
            console.log("Error:");
            console.log(error);
          }
        );
    }
  }, [open]);

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
          <div id="modal-modal-description">
            {actionType === "show" && (
              <span>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.rating}</p>
                <p>{data.created_at}</p>
                <p>{data.updated_at}</p>
              </span>
            )}

            {actionType === "edit" && (
              <span>
                  <br/>
                  <TextField id="name" label="Name" variant="standard" value={data.name} />
                  <br/>
                  <br/>
                  <TextField id="rating" label="Rating" variant="standard" value={data.id} />
                  <br/>
                  <br/>
                  <Button variant="contained" color="success"> Save </Button>
              </span>
            )}

            {actionType === "delete" && (
              <span>
                <p>Are you sure you want to delete this?</p>
                <Button variant="contained" color="error"> Permanently Delete</Button>
              </span>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
