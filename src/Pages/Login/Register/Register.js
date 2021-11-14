import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { registerUser } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      loginData.displayName,
      history
    );
    e.preventDefault();
  };
  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ my: "auto" }}>
          <Typography variant="h3" gutterBottom component="div" sx={{ my: 4 }}>
            Registration
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              label="Your Name"
              name="displayName"
              onBlur={handleOnBlur}
              variant="standard"
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Your email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Re type Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              variant="standard"
              sx={{ width: "60%", my: 2 }}
            />
            <Link style={{ textDecoration: "none" }} to="/login">
              <Typography variant="subtitle" gutterBottom component="div">
                Already register? go to login.
              </Typography>
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "60%", my: 2 }}
            >
              Register
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            width="100%"
            alt="loginImage"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
