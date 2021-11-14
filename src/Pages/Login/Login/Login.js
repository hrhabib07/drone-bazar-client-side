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
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ my: "auto" }}>
          <Typography variant="h3" gutterBottom component="div" sx={{ my: 4 }}>
            Please Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              label="Your email"
              variant="standard"
              name="email"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
              onChange={handleOnChange}
              sx={{ width: "60%", my: 2 }}
            />
            <Link style={{ textDecoration: "none" }} to="/register">
              <Typography variant="subtitle" gutterBottom component="div">
                New user? go to register.
              </Typography>
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "60%", my: 2 }}
            >
              Login
            </Button>

            <Button
              onClick={signInWithGoogle}
              variant="contained"
              sx={{ width: "60%", my: 2 }}
            >
              {" "}
              sign in with Google{" "}
            </Button>
            <Link to="/adminLogin" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ width: "60%", my: 2 }}>
                {" "}
                Admin{" "}
              </Button>
            </Link>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">
                Login successfully!
                {history.goBack()}
              </Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
            width="100%"
            alt="loginImage"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
