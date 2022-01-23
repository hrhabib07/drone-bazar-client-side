import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  const bgImage = `https://nypost.com/wp-content/uploads/sites/2/2017/03/drones_feature.jpg?quality=80&strip=all`;
  return (
    <Box
      style={{
        backgroundColor: "#b5cdfa",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Container
            sx={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "darkblue" }}>
              <Typography variant="h2" component="div" gutterBottom>
                Welcome to <span style={{ color: "yellow" }}>Drone Bazar</span>
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                The biggest drone shop in Your Area
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 0 }}>
          <img src={bgImage} alt="drone" width="100%" height="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
