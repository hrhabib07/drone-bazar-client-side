import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 5, backgroundColor: "#1769aa", color: "white" }}>
      <hr />
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 600, color: "yellow" }}
        >
          Drone Bazar
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ mb: 3, color: "black" }}
        >
          The biggest drone shop in Your Area
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Container sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600, my: 4 }}
              >
                TOP CATEGORES
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Crossovers
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Hybrids
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Hybrid Cars
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Hybrid SUVs
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Concept Vehicles
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Container sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600, my: 4 }}
              >
                ABOUT US
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Privacy
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Hybrid Cars
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Cookies
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Trademarks
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Terms of use
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Container sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600, my: 4, my: 4 }}
              >
                USEFUL LINKS{" "}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Our Partners
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Careers
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Sitemap
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Investors
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                &gt; Request a Quote
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: 600, my: 4 }}
              >
                SUBSCRIBE NEWSLETTER
              </Typography>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="filled-basic"
                  label="emailAddress"
                  variant="filled"
                  sx={{ backgroundColor: "white", width: "100%" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    height: "100px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained">Subscribe </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
