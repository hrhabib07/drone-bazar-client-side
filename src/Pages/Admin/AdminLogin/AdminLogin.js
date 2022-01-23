/* import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({});
  const nameRef = useRef();
  const passRef = useRef();
  const history = useHistory();

  const handleAdminLogin = (e) => {
    const adminId = nameRef.current.value;
    const adminPass = passRef.current.value;
    console.log(adminPass);
    console.log(adminId);
     if (adminId === "admin@admin.com" && adminPass === "123456") {
      history.push("/adminDashboard");
    } else {
      alert(
        "Vai apni tho admin na aikane ki koran? Admin hoila github theke id pass nia asan naila apnake dukta dimu na. Sorry"
      );
    } 
    e.preventDefault();
  };

  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ my: "auto" }}>
          <Typography variant="h3" gutterBottom component="div" sx={{ my: 4 }}>
            Admin Login
          </Typography>
          <form onSubmit={handleAdminLogin}>
            <input type="text" ref={nameRef} placeholder="Email" />
            <br />
            <br />
            <input type="pass" placeholder="Password" ref={passRef} />
            <br />
            <br />
            <Link style={{ textDecoration: "none" }} to="/login">
              <Typography variant="subtitle" gutterBottom component="div">
                Not admin? login as user.
              </Typography>
            </Link>
            <Button type="submit" variant="contained" sx={{ my: 2 }}>
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://image.freepik.com/free-vector/cyber-security-risk-management-abstract-concept-illustration_335657-2162.jpg"
            width="100%"
            alt="loginImage"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminLogin;
 */
