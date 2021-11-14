import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";

const OrdersForm = ({ orders, price }) => {
  const [ordersData, setOrdersData] = useState({});
  //   console.log(orders);
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrdersData = { ...ordersData };
    newOrdersData[field] = value;
    setOrdersData(newOrdersData);
  };
  const handleSubmit = (e) => {
    const newOrder = {
      ...ordersData,
      orders,
      price,
    };
    if (orders.length > 0) {
      fetch("http://localhost:5000/newOrders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      fetch(`http://localhost:5000/deleteMyOrders`, {
        method: "delete",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      alert("Please add some products to place order");
    }

    history.push("/");
    e.preventDefault();
  };

  return (
    <Grid>
      <Typography variant="h3" gutterBottom component="div" sx={{ my: 4 }}>
        Delivery form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="standard-basic"
          label="Your Name"
          variant="standard"
          name="name"
          onChange={handleOnChange}
          sx={{ width: "60%", my: 2 }}
        />
        <TextField
          id="standard-basic"
          label="Your Email"
          variant="standard"
          name="email"
          onChange={handleOnChange}
          sx={{ width: "60%", my: 2 }}
        />
        <TextField
          required
          id="standard-basic"
          label="Your PhoneNumber"
          type="number"
          variant="standard"
          name="phone"
          onChange={handleOnChange}
          sx={{ width: "60%", my: 2 }}
        />
        <TextField
          required
          id="standard-basic"
          label="Address"
          variant="standard"
          name="address"
          onChange={handleOnChange}
          sx={{ width: "60%", my: 2 }}
        />

        <Button type="submit" variant="contained" sx={{ width: "60%", my: 2 }}>
          Confirm Order
        </Button>
      </form>
    </Grid>
  );
};

export default OrdersForm;
