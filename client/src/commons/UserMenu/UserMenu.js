import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth } from "../../hooks/useAuth";

export const UserMenu = ({ open, setOpen }) => {
  const { displayName, photoURL } = useAuth();

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={() => setOpen(true)} sx={{ p: 0 }}>
          {/* <Avatar alt={displayName} src={photoURL} /> */}
          <Avatar alt={displayName}>
            {" "}
            {displayName[0].toLocaleUpperCase()}{" "}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
      
        <MenuItem>
          <Typography textAlign="center">Вихід</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
