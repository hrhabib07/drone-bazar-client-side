import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 600,
              }}
            >
              <span>Drone Bazar</span>
            </Link>
          </Typography>
          <Link
            to="/myOrders"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Orders</Button>
          </Link>
          <Link
            to="/explore"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Explore</Button>
          </Link>
          {user.email ? (
            <Button color="inherit" onClick={logout}>
              Logout
              <br />({user.displayName})
            </Button>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
