import React, { useState } from "react"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import FolderIcon from "@mui/icons-material/Folder"
import AddIcon from "@mui/icons-material/Add"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import st from "./Folders.module.scss"
import { AppInput } from "../../../commons/Elements/AppInput/AppInput"
import { Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { AppButton } from "../../../commons/Elements/AppButton/AppButton"
import { SpellingNamesModal } from "../../../commons/SpellingNamesModal/SpellingNamesModal"



export const FoldersMenuItem = ({ open, openingSwitch }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <ListItem
        className={st.folders}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <AddIcon color="color" onClick={() => setShow(true)}/>
          </IconButton>
        }
      >
        <ListItem onClick={openingSwitch} disablePadding>
        <ListItemIcon>
          <FolderIcon color="color" />
        </ListItemIcon>
        <p children={"Папки"} className={st.foldersTitle} />
        {open ? <ExpandLess color="color" /> : <ExpandMore color="color" />}
        </ListItem>
      </ListItem>



<SpellingNamesModal open={show} onHide={() => setShow(false)}/>












      </>
  )
}
