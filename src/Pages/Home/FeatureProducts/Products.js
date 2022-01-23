import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Products = ({ drone }) => {
  // code for snackbar started here
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    handlePurchase(drone);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // code for snackbar ended here

  const { user } = useAuth();
  const handlePurchase = (order) => {
    const email = user.email;
    const newOrder = { ...order, email };
    const { _id, ...rest } = newOrder;
    console.log(rest);
    fetch("https://nameless-ridge-59413.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Grid item xs={12} md={4}>
      <Card variant="outlined">
        <CardMedia
          component="img"
          height="180"
          image={drone?.img}
          alt="green iguana"
          sx={{ borderBottom: "1px solid gray" }}
        />
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ my: 2, fontWeight: 600, color: "darkblue" }}
        >
          {drone.productName}
        </Typography>
        <Typography component="div" sx={{ mb: 2 }}>
          Price:
          <span style={{ fontWeight: 600 }}> {drone.price}$</span> only
        </Typography>
        <Container
          sx={{
            textAlign: "left",
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "gray" }}
            gutterBottom
            component="div"
          >
            {drone.description.slice(0, 120)}
          </Typography>
        </Container>

        {user.email ? (
          <Box>
            <Button
              onClick={handleClick}
              sx={{ my: 2, fontWeight: 600 }}
              variant="contained"
            >
              Add to chart
            </Button>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                This product is successfully added to the !
              </Alert>
            </Snackbar>
          </Box>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button sx={{ m: 2 }} variant="contained">
              Add to chart{" "}
            </Button>
          </Link>
        )}
      </Card>
    </Grid>
  );
};

export default Products;
