import React, { useState } from "react"
import { IconButton, Menu  } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"

// випадаюче меню
export const AppMenu = ({ children, buttonAction }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick} edge={"end"}>
        {buttonAction ? buttonAction :  <MoreVertIcon />}
       </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <span onClick={handleClose}> {children}  </span>
       
      </Menu>
    </>
  )
}
