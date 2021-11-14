import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";

const Explore = () => {
  const [drones, setDrones] = useState();
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
  let totalPrice = 0;
  orders?.map((od) => {
    totalPrice = totalPrice + Number(od.price);
  });

  fetch("http://localhost:5000/orders")
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
      <Grid container spacing={2} xs={12} md={12} sx={{ my: 4 }}>
        {drones?.map((drone) => (
          <AllProducts drone={drone}> </AllProducts>
        ))}
      </Grid>
      <Grid container spacing={2} xs={12} md={12} sx={{ m: 1 }}>
        <Paper elevation={3} alignCenter sx={{ mx: "auto", p: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ color: "#4779ca" }}
          >
            Order Summery
          </Typography>
          <Typography
            variant="subtitle"
            gutterBottom
            component="div"
            sx={{ color: "gray" }}
          >
            Total Products {orders?.length}
          </Typography>
          <Typography
            variant="subtitle"
            gutterBottom
            component="div"
            sx={{ color: "gray" }}
          >
            Total Price {totalPrice}
          </Typography>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <Button sx={{ m: 2 }} variant="contained">
              Place order{" "}
            </Button>
          </Link>
          <Link to="/adminLogin" style={{ textDecoration: "none" }}>
            <Button variant="outlined" sx={{ width: "60%", my: 2 }}>
              {" "}
              Admin{" "}
            </Button>
          </Link>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Explore;
