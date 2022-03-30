import React from "react"
import queryString from "query-string"
import cl from "classnames"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItem from "@mui/material/ListItem"
import FolderIcon from "@mui/icons-material/Folder"
import { useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import st from "./Folders.module.scss"
import { DropDuwnMenu } from "./DropDownMenu"
import { ListItemButton } from "@mui/material"

export const FoldersItem = ({ name, id }) => {
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
    <ListItem
      className={cl(st.foldersItem, { [st.activeItem]: folderId === id })}
      secondaryAction={<DropDuwnMenu />}
    >
      <ListItem onClick={selectFolder}>
        <ListItemIcon>
          <FolderIcon color="color" />
        </ListItemIcon>
        <p children={name} className={st.itemText} />
      </ListItem>
    </ListItem>
  )
}
