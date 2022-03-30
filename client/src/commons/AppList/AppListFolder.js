import React, { useState } from "react"
import cl from "classnames"
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material"
import AudiotrackIcon from "@mui/icons-material/Audiotrack"
import DeleteIcon from "@mui/icons-material/Delete"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import FolderIcon from '@mui/icons-material/Folder'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import st from "./AppList.module.scss"

export const AppListFolder = ({ name, onRemove, className, children }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem
        className={cl(st.appListFolder, className)}
        disablePadding
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={onRemove}>
            <DeleteIcon color="color" />
          </IconButton>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            {  open 
            ? <FolderOpenIcon color="color" />
            : <FolderIcon color="color" />   
            }
          </ListItemIcon>

          <ListItemText primary={name} />

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={st.listItemsFolder}>
          {children}
        </List>
      </Collapse>
    </>
  )
}
