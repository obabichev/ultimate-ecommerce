import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAuthContext } from "../AuthContext";
import { AccountCircle } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import Search from "./Search";
import { formatProfileName } from "../../utils/format";

interface ApplicationBarProps {}

const ApplicationBar: React.FunctionComponent<ApplicationBarProps> = () => {
  const { user } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();

  const navigateLoginPage = () => history.push("/login");
  const navigateHomePage = () => history.push("/");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography onClick={navigateHomePage} variant="h6" component="div">
          Ultimate e-commerce
        </Typography>
        <Search />
        {!user && (
          <Button color="inherit" onClick={navigateLoginPage}>
            Login
          </Button>
        )}
        {user && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Box pt={1} pb={1} pl={2} pr={2}>
                <Typography>{formatProfileName(user)}</Typography>
              </Box>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
