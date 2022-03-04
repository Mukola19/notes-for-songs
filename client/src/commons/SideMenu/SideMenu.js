import React from "react"
import { Grid } from "@mui/material"
import { SideMenuItem } from "./SideMenuItem"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import FolderIcon from '@mui/icons-material/Folder'
import cl from "classnames"
import st from "./SideMenu.module.scss"

export const SideMenu = ({ open, setOpen }) => {
  const links = [
    { path: "/songs", title: "Пісні", component: <LibraryMusicIcon color='textColor'/> },
    { path: "/folders", title: "Папки", component: <FolderIcon color='textColor' /> },
  ]

  return (
    <div className={st.sidebar}>
      <Grid className={st.firstMenu}>
        {links.map((item) => (
          <SideMenuItem {...item} key={item.path} open={open} />
        ))}
      </Grid>
    </div>
  )
}
