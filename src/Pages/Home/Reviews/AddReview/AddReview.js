import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
const AddReview = () => {
  const [review, setReview] = useState({});
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };
  const handleLoginSubmit = (e) => {
    fetch("https://nameless-ridge-59413.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Review Added Successfully");
        }
      });
    history.push("/");
    e.preventDefault();
  };
  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ my: "auto" }}>
          <Typography variant="h3" gutterBottom component="div" sx={{ my: 4 }}>
            Feedback
          </Typography>
          <Typography
            variant="subtitle"
            gutterBottom
            component="div"
            sx={{ my: 4 }}
          >
            It will be added on the home page
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              label="Your Name"
              variant="standard"
              name="displayName"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="feedback"
              variant="standard"
              name="review"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="rating"
              variant="standard"
              name="rating"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ width: "60%", my: 2 }}
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://img.freepik.com/free-vector/lovely-hand-drawn-speech-bubble-testimonial_23-2147966283.jpg?size=338&ext=jpg"
            width="100%"
            alt="loginImage"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddReview;
