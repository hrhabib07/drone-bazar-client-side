import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  const bgImage = `https://image.freepik.com/free-photo/aerial-drone-panoramic-view-nature-moldova_1268-18134.jpg`;
  return (
    <Grid
      style={{
        backgroundColor: "#4c7cd0",
      }}
      container
      spacing={0}
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ m: 4, color: "white" }}>
          <Typography variant="h2" component="div" gutterBottom>
            Welcome to Drone Bazar
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            The biggest drone shop in Kochuketh
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 0, m: 0 }}>
        <img
          src="https://image.freepik.com/free-photo/light-motor-drone-control-helicopter_1172-169.jpg"
          alt="drone"
          width="100%"
          height="300px"
        />
      </Grid>
    </Grid>
  );
};

export default Banner;
