import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import useAuth from "../../../Hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Registration = () => {
  const [userData, setUserData] = useState({});
  const { registerUser, isLoading, user, authError } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const newUser = { ...userData };
    const field = e.target.name;
    const value = e.target.value;
    newUser[field] = value;
    setUserData(newUser);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.password2) {
      alert("password did not matched");
      return;
    }
    registerUser(userData.email, userData.password, userData.name, history);
    console.log(userData);
  };
  return (
    <Container
      sx={{
        height: { xs: "900px", md: "700px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ my: 5, fontWeight: 600 }}
            >
              {" "}
              Registration
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="filled"
                  sx={{ width: "80%" }}
                />
                <br />
                <br />
                <TextField
                  label="Email"
                  name="email"
                  onBlur={handleOnBlur}
                  variant="filled"
                  sx={{ width: "80%" }}
                />
                <br />
                <br />
                <TextField
                  label="Password"
                  name="password"
                  onBlur={handleOnBlur}
                  type="password"
                  variant="filled"
                  sx={{ width: "80%" }}
                />
                <br />
                <br />
                <TextField
                  label="Re-type Password"
                  name="password2"
                  onBlur={handleOnBlur}
                  type="password"
                  variant="filled"
                  sx={{ width: "80%" }}
                />
                <br />
                <br />
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button>Already Registered? please Login</Button>
                </Link>
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "35%", m: 2 }}
                >
                  Submit
                </Button>
                {authError && <Alert severity="error">{authError}</Alert>}

                <Link to="/" style={{ textDecoration: "none" }}>
                  <IconButton aria-label="delete" size="large">
                    <HomeIcon fontSize="inherit" />
                  </IconButton>
                </Link>
              </form>
            )}
            {isLoading && <CircularProgress />}
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-page-1886582-1598253.png"
            width={"100%"}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Registration;
