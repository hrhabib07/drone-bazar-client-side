import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";

const AdminControl = () => {
  const [drones, setDrones] = useState();
  const [newProduct, setNewProduct] = useState({});
  useEffect(() => {
    fetch("https://nameless-ridge-59413.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const product = { ...newProduct };
    product[field] = value;
    setNewProduct(product);
  };
  const handleAddProduct = (e) => {
    fetch("https://nameless-ridge-59413.herokuapp.com/newProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Product added successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" gutterBottom component="div">
            All Products
          </Typography>
          <Grid container spacing={2}>
            {drones?.map((drone) => (
              <AllProducts drone={drone}></AllProducts>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h2" gutterBottom component="div">
            Add Product
          </Typography>{" "}
          <form onSubmit={handleAddProduct}>
            <TextField
              id="standard-basic"
              label="Product Name"
              variant="standard"
              name="productName"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Price"
              variant="standard"
              name="price"
              onChange={handleOnChange}
              type="number"
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              name="description"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Img Url"
              variant="standard"
              name="img"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <br />
            <Button type="submit" variant="contained" sx={{ my: 2 }}>
              Add Product
            </Button>
          </form>
        </Grid>
      </Grid>{" "}
    </Container>
  );
};

export default AdminControl;
