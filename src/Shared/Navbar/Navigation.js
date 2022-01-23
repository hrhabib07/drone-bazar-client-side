import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const pages = ["Products", "Pricing", "Blog"];

/* 

 {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

*/

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const { user, logout, admin } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 600,
              color: "yellow",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "yellow" }}>
              Drone Bazar
            </Link>{" "}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseNavMenu}>Products</MenuItem>
              </Link>
              <Link to="/orders" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseNavMenu}>Chart</MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 600,
              color: "yellow",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "yellow" }}>
              Drone Bazar
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/explore" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Products
              </Button>
            </Link>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Chart
              </Button>
            </Link>
          </Box>

          {user.email && admin ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Typography
                  sx={{
                    width: "60%",
                    mx: "auto",
                    fontWeight: 600,
                    color: "darkBlue",
                    my: 3,
                  }}
                >
                  {user.displayName}
                </Typography>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/adminDashboard" style={{ textDecoration: "none" }}>
                    <Button>Admin Dashboard</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={logout}>Logout</Button>{" "}
                </MenuItem>
              </Menu>
            </Box>
          ) : user.email ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/myOrders" style={{ textDecoration: "none" }}>
                    <Button>My Orders</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={logout}>Logout</Button>{" "}
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="outlined" sx={{ color: "pink" }}>
                LogIn
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
