import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DisplayOrders from "./DisplayOrders";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState();
  useEffect(() => {
    fetch("https://nameless-ridge-59413.herokuapp.com/myOrders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  console.log(myOrders);
  return (
    <Container>
      <h2>All orders are Here</h2>
      {myOrders?.length ? (
        <Grid container spacing={2}>
          {myOrders?.map((od) => (
            <DisplayOrders order={od}></DisplayOrders>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default MyOrders;
