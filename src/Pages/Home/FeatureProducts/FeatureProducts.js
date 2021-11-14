import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const FeatureProducts = () => {
  const [drones, setDrones] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/products")
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
      <Grid container spacing={2}>
        {drones?.slice(0, 6).map((drone) => (
          <Products drone={drone}> </Products>
        ))}
      </Grid>
      <br />
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <Button variant="outlined">View orders</Button>
      </Link>
    </Container>
  );
};

export default FeatureProducts;