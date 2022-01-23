import { Button, Typography, Card, Grid, CardMedia } from "@mui/material";
import React from "react";

const AllProducts = ({ drone }) => {
  const handleDelete = (id) => {
    fetch(`https://nameless-ridge-59413.herokuapp.com/products/${id}`, {
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

        <Typography variant="h6" gutterBottom component="div">
          Price: $ {drone.price}
        </Typography>

        <Button
          sx={{ m: 2 }}
          variant="contained"
          onClick={() => handleDelete(drone._id)}
        >
          Delete{" "}
        </Button>
      </Card>
    </Grid>
  );
};

export default AllProducts;
