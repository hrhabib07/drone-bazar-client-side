import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const FeatureProducts = () => {
  const [drones, setDrones] = useState();
  useEffect(() => {
    fetch("https://nameless-ridge-59413.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);

  return (
    <Container sx={{ my: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ my: 4, color: "#4779ca" }}
      >
        Our Products
      </Typography>
      {drones?.length ? (
        <Grid container spacing={2}>
          {drones?.slice(0, 3).map((drone) => (
            <Products drone={drone}> </Products>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
      <br />
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <Button variant="outlined">See More</Button>
      </Link>
    </Container>
  );
};

export default FeatureProducts;
