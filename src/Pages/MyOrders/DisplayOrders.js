import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import OrdersForm from "../Orders/OrdersForm";

const DisplayOrders = ({ order }) => {
  console.log(order);
  const handleCancelOrder = (id) => {
    fetch(`http://localhost:5000/newOrders/${id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("This item is removed Successfully");
        }
      });
  };
  const orderedItem = order.orders;
  return (
    <Grid item xs={12} md={3}>
      <Paper elevation={3}>
        <Typography variant="h5" gutterBottom component="div">
          {order.name}
        </Typography>
        <Typography
          variant="subtitle"
          sx={{ color: "gray" }}
          gutterBottom
          component="div"
        >
          {order.email}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          Orders List
        </Typography>
        {orderedItem.map((item) => (
          <>
            {item.productName} <br />{" "}
          </>
        ))}
        <Typography variant="h6" gutterBottom component="div">
          total cost $ {order.price}
        </Typography>
        <Button
          variant="text"
          sx={{ color: "red" }}
          onClick={() => handleCancelOrder(order._id)}
        >
          Delete order
        </Button>
      </Paper>
    </Grid>
  );
};

export default DisplayOrders;
