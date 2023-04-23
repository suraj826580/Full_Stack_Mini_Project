import React from "react";
import { Box, Grid, Link } from "@mui/material";

const useStyle = {
  width: "100%",
  height: "auto",
  transition: "all ease-in-out",
  "&:hover": {
    cursor: "pointer",
  },
};

export default function GenericGrid({ array, column }) {
  return (
    <Box width={"90%"} margin={"auto"}>
      <Grid container spacing={4}>
        {array.map(({ image }) => (
          <Grid item lg={column} overflow={"hidden"}>
            <Link href="#">
              <img style={useStyle} src={image} alt={"error"} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
