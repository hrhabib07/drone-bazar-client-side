import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import DisplayOrders from "./DisplayOrders";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState();
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/confirmedOrders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user]);
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
