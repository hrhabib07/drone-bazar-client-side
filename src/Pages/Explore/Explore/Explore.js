import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../../Home/FeatureProducts/Products";
import AllProducts from "./AllProducts";

const Explore = () => {
  const [drones, setDrones] = useState();
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("https://nameless-ridge-59413.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
  let totalPrice = 0;
  orders?.map((od) => {
    totalPrice = totalPrice + Number(od.price);
  });

  fetch("https://nameless-ridge-59413.herokuapp.com/orders")
    .then((res) => res.json())
    .then((data) => setOrders(data));

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
        <Grid container spacing={2} xs={12} md={12} sx={{ my: 4 }}>
          {drones?.map((drone) => (
            <Products drone={drone}> </Products>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default Explore;
