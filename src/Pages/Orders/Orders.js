import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import OrdersForm from "./OrdersForm";

const Orders = () => {
  const [orders, setOrders] = useState();

  const handleCancelOrder = (id) => {
    fetch(`https://nameless-ridge-59413.herokuapp.com/orders/${id}`, {
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

  useEffect(() => {
    fetch("https://nameless-ridge-59413.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  let totalPrice = 0;
  orders?.map((od) => (totalPrice = totalPrice + Number(od.price)));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" gutterBottom component="div" sx={{ my: 4 }}>
          Your order list
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ my: 4 }}>
          Your total amount $ {totalPrice} <br /> from {orders?.length} products
        </Typography>
        {orders?.length ? (
          <Box>
            {orders?.map((od) => (
              <Paper sx={{ my: 1, width: "40%", mx: "auto" }}>
                {od.productName} of $ {od?.price}
                <Button
                  style={{ color: "red" }}
                  onClick={() => handleCancelOrder(od._id)}
                >
                  Cancel
                </Button>
                <br />
              </Paper>
            ))}
          </Box>
        ) : (
          <CircularProgress />
        )}
      </Grid>
      <Grid item xs={12} md={6} sx={{ my: 4 }}>
        <OrdersForm orders={orders} price={totalPrice}></OrdersForm>
      </Grid>
    </Grid>
  );
};

export default Orders;
