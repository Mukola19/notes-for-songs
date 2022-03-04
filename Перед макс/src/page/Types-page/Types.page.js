import React from "react"
import {
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material"
import  AudiotrackIcon  from "@mui/icons-material/Audiotrack"
import DeleteIcon from '@mui/icons-material/Delete';

import st from "./Types.page.module.scss"
import { Header } from "../../commons/Header/Header"

export const TypesPage = () => {
  const list = [
    { id: 2, name: " Квітучий" },
    { id: 3, name: " Квітучий" },
    { id: 4, name: " Квітучий" },
  ]

  return (
    <>
      <Header />
      <Box className={st.container}>
        <List>
          {list.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <AudiotrackIcon />
                </ListItemIcon>

                <ListItemText primary={item.name} />
              </ListItemButton>
              <Divider />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}
