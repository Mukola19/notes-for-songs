import React, { useState } from "react"
import queryString from "query-string"
import cl from "classnames"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItem from "@mui/material/ListItem"
import FolderIcon from "@mui/icons-material/Folder"
import { useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import st from "./MenuItems.module.scss"
import { DropDuwnMenu } from "./DropDownMenu"
import { ListItemButton, ListItemText, MenuItem } from "@mui/material"
import { FolderWritingModal } from "../../../commons/FolderWriting/FolderWritingModal"

export const FoldersItemTwo = ({ name, id }) => {
  const { push } = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const { folderId } = queryString.parse(location.search)

  const selectFolder = () => {
    if (folderId !== id) {
      push(`/songs/?folderId=${id}`)
    }
  }

  return (
    <>
    <ListItem
      className={cl(st.foldersItemTwo, { [st.activeItem]: folderId === id })}
      secondaryAction={<DropDuwnMenu folderId={id} />}
    >
      <ListItemButton onClick={selectFolder} role={undefined} dense >
        <ListItemIcon className={st.foldersItemTwo__icon}>
          <FolderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </ListItem>


    </>
  )
}
