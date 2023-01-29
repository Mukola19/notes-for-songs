import React from "react"
import { useSelector } from "react-redux"
import {  ListItemIcon, Dialog, DialogTitle ,ListItemText,ListItem,List } from "@mui/material"
import FolderIcon from "@mui/icons-material/Folder"
import { getFolders } from "../../store/folders/foldersSelector"

//Компонент дл явибирання папки для пісні
export const SelectFolderDialog = ({ onClose, open, selectAFolder  }) => {
  const folders = useSelector(getFolders)


  // Функція для паредачі папки на верех
  const selectingFolder = folder => {
    onClose()
    selectAFolder(folder)
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Виберіть папку </DialogTitle>
      <List sx={{ pt: 0 }}>
        {folders?.map((folder) => (
          <ListItem
            button
            onClick={() => selectingFolder(folder)}
            key={folder.id}
          >
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={folder.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
