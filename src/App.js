import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import MovieTable from './components/MovieTable';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Success:");
          console.log(result);
          setData(result);
        },
        (error) => {
          console.log("Error:");
          console.log(error);
        }
      );
  }, []);

  const columnsTitles = [
    { field: "id", headerName: "ID", width: 9 },
    { field: "name", headerName: "Name", editable: false, width: 300  },
    { field: "rating", headerName: "Rating", editable: false },
  ];

  const rows = data;

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justifyContent="center"  
    >
      <Grid item xs={3}>
        <div className="App">
          <h1>Movies List</h1>
        </div>
      </Grid>

      <Grid item>
          <MovieTable movieData={data} /> 
      </Grid>
    </Grid>
  );
}

export default App;
