import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Products = ({ drone }) => {
  const { user } = useAuth();
  const handlePurchase = (order) => {
    const newOrder = { ...order };
    const { _id, ...rest } = newOrder;
    console.log(rest);
    fetch("https://nameless-ridge-59413.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Grid item xs={12} md={4}>
      <Card variant="outlined">
        <CardMedia
          component="img"
          height="140"
          image={drone?.img}
          alt="green iguana"
        />
        <Typography variant="h4" gutterBottom component="div">
          {drone.productName}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "gray" }}
          gutterBottom
          component="div"
        >
          {drone.description}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          Price: $ {drone.price}
        </Typography>
        {user.email ? (
          <Button
            onClick={() => handlePurchase(drone)}
            sx={{ m: 2 }}
            variant="contained"
          >
            Purchase{" "}
          </Button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button sx={{ m: 2 }} variant="contained">
              Purchase{" "}
            </Button>
          </Link>
        )}
      </Card>
    </Grid>
  );
};

export default Products;
