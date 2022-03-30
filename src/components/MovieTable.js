import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MovieModal from "./MovieModal";

export default function MovieTable(props) {
  const movieData = props.movieData;
  const rows = movieData;
  const [openModal, setOpenModal] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [actionType, setActionType] = React.useState(false);

  function handleOpenModal(id, actionType){
    setOpenModal(true);
    setId(id);
    setActionType(actionType)
  }

  return (
    <>
      <MovieModal open={openModal} setOpen={setOpenModal} id={id} actionType={actionType} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Ratig</TableCell>
              <TableCell align="center" colSpan={3}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.rating}</TableCell>
                <TableCell align="left">
                  <Button variant="contained" id={row.id} onClick={ (e)=>(handleOpenModal(e.target.id, 'show')) } >Show</Button>
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" color="success" id={row.id} onClick={ (e)=>(handleOpenModal(e.target.id, 'edit')) } >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" color="error" id={row.id} onClick={ (e)=>(handleOpenModal(e.target.id, 'delete')) }>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
