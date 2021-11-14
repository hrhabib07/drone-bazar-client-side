import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div>
      <hr />
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ color: "#4779ca", my: 0, py: 0, fontWeight: 600 }}
        >
          Drone Bazar
        </Typography>
        <Typography
          variant="subtitle"
          gutterBottom
          component="div"
          sx={{ my: 0, py: 0 }}
        >
          Best online drone shop
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom component="div">
            Others services
          </Typography>
          <ul style={{ listStyleType: "none" }}>
            <li>Flight controller</li>
            <li>GPS module</li>
            <li>Battery</li>
            <li>Antenna</li>
            <li>Receiver</li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom component="div">
            Contact us
          </Typography>
          <Box>
            <Typography variant="subtitle" gutterBottom component="div">
              email : dronebazar@gamil.com
            </Typography>
            <Typography variant="subtitle" gutterBottom component="div">
              location : kochuketh, Dhaka.
            </Typography>
            <Typography variant="subtitle" gutterBottom component="div">
              website : dronebazar.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
