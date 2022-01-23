import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import OrdersForm from "./OrdersForm";

const Orders = () => {
  const [orders, setOrders] = useState();
  const { user } = useAuth();

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
    fetch(`http://localhost:5000/myOrders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  console.log(orders);

  let totalPrice = 0;
  orders?.map((od) => (totalPrice = totalPrice + Number(od.price)));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: { xs: "auto", md: "700px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h3" gutterBottom component="div" sx={{ my: 4 }}>
          Your order list
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ my: 4 }}>
          Your total amount $ {totalPrice} <br /> from {orders?.length} products
        </Typography>
        {orders?.length > 0 ? (
          <Box>
            {orders?.map((od) => (
              <Paper
                sx={{
                  my: 1,
                  width: { xs: "90%", md: "40%" },
                  mx: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "lightblue",
                }}
              >
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  sx={{ fontWeight: 600, mx: 4 }}
                >
                  {od.productName}{" "}
                  <span style={{ color: "green" }}>of {"   "}</span> $
                  {od?.price}
                </Typography>
                <Button
                  color="error"
                  onClick={() => handleCancelOrder(od._id)}
                  variant="outlined"
                  sx={{ m: 1, py: 0 }}
                >
                  Cancel
                </Button>
                <br />
              </Paper>
            ))}
          </Box>
        ) : orders?.length === 0 ? (
          <Typography
            variant="subtitle"
            color="error"
            gutterBottom
            component="div"
            sx={{ my: "auto" }}
          >
            No item to show
          </Typography>
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
