import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";

const AdminControl = () => {
  const [drones, setDrones] = useState();
  const [success, setSuccess] = useState(false);
  const [newProduct, setNewProduct] = useState({});

  // code for make admin start here
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    e.preventDefault();
    fetch(`http://localhost:5000/users/admin`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSuccess(true);
        } else {
          alert("Something is wrong, Please try again");
        }
      });
  };
  // code for make admin ended here

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
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, my: 4, color: "darkblue" }}
            gutterBottom
            component="div"
          >
            Menage Products
          </Typography>
          {drones?.length && (
            <Grid container spacing={2}>
              {drones?.map((drone) => (
                <AllProducts drone={drone}></AllProducts>
              ))}
            </Grid>
          )}
          {!drones?.length && (
            <Grid container spacing={2}>
              <CircularProgress />
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, my: 4, color: "darkblue" }}
            gutterBottom
            component="div"
          >
            Add a Product
          </Typography>{" "}
          <form onSubmit={handleAddProduct}>
            <TextField
              id="standard-basic"
              label="Product Name"
              variant="standard"
              name="productName"
              required
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Price"
              required
              variant="standard"
              name="price"
              onChange={handleOnChange}
              type="number"
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Description"
              required
              variant="standard"
              name="description"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Img Url"
              required
              variant="standard"
              name="img"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <br />
            <Button type="submit" variant="contained" sx={{ my: 2 }}>
              Add this Product
            </Button>
          </form>
          <Box
            sx={{
              my: 4,
              py: 4,
              border: "1px solid gray",
              borderRadius: "20px",
              backgroundColor: "lightblue",
            }}
          >
            <Typography variant="h4" gutterBottom component="div">
              Make Admin
            </Typography>{" "}
            <form>
              <TextField
                id="standard-basic"
                label="email"
                variant="standard"
                name="productName"
                required
                onBlur={handleOnBlur}
                sx={{ width: "60%", my: 2 }}
              />
              <br />
              <Button
                onClick={handleAdminSubmit}
                type="submit"
                variant="contained"
                sx={{ my: 2 }}
              >
                Make Admin{" "}
              </Button>
              {success && (
                <Alert sx={{ width: "80%", mx: "auto" }} severity="success">
                  Admin made successfully — check it out!
                </Alert>
              )}
            </form>
          </Box>
        </Grid>
      </Grid>{" "}
    </Container>
  );
};

export default AdminControl;
