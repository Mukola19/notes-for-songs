import React, { useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Divider, Typography } from "@mui/material"
import st from "./AppDropdown.module.scss"

export const AppDropdown = ({ options, onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [title, setTitle] = useState("")
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onSelectLocal = item => {
    setTitle(item.name)
    handleClose()
    onSelect(item.id)
  }

 

  return (
    <div>
      <Button
        sx={{ width: 100 }}
        onClick={handleClick}
        color="textColor"
      >
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          {title || "Фільтр"}
        </Typography>
      </Button>


      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={st.appDropdownMenu}
        color="error"
  
      >
           <MenuItem onClick={() => onSelectLocal({id: 0})}>
            Відмінити
          </MenuItem>
          <Divider variant="middle"/>
        {options.map((item) => (
          <MenuItem onClick={() => onSelectLocal(item)} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
