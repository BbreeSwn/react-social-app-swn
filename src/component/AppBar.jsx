import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar, Menu , MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthenContext";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate;
   const [anchorEl , setAnchorEl] = useState(null);

 const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.target.value);
  }
  const handleClose = (e) => {
    setAnchorEl(e.target.value);
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  const handleClickToProfile = () => {
    navigate('/profile')
  }
  return (
    <MuiAppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <Box display="flex" alignItems="center" gap="10px">
          <MenuIcon />
          <IconButton></IconButton>
          <Typography
            variant="h6"
            noWrap
            conponent="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            FakeBuck
          </Typography>
        </Box>

        <Box>
          <Avatar alt="Remy Sharp" onClick={handleClick} />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClickToProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
