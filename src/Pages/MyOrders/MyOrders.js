import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DisplayOrders from "./DisplayOrders";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/myOrders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  console.log(myOrders);
  return (
    <Container>
      <h2>All orders are Here</h2>
      <Grid container spacing={2}>
        {myOrders?.map((od) => (
          <DisplayOrders order={od}></DisplayOrders>
        ))}
      </Grid>
    </Container>
  );
};

export default MyOrders;
