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
// import loginImg from "../../../images/login/login.jpg";
import HomeIcon from "@mui/icons-material/Home";
import useAuth from "../../../Hooks/useAuth";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
  const { loginUser, signInWithGoogle, isLoading, user } = useAuth();
  const [userData, setUserData] = useState({});
  const location = useLocation();
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
    loginUser(userData.email, userData.password, location, history);
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
              Login
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
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
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button>New user? please register</Button>
                </Link>
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "35%", m: 2 }}
                >
                  Login
                </Button>
                <br />
                <Button
                  variant="contained"
                  sx={{ width: { xs: "50%", md: "35%" }, m: 2 }}
                  onClick={signInWithGoogle}
                >
                  Google sign in
                </Button>
                <br />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <IconButton aria-label="delete" size="large">
                    <HomeIcon fontSize="inherit" />
                  </IconButton>
                </Link>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success"> User login successful !</Alert>
            )}
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png"
            width={"100%"}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
