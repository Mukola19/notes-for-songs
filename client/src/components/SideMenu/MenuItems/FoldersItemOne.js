import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import List from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import AddIcon from '@mui/icons-material/Add'
import FolderIcon from '@mui/icons-material/Folder'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { getFolders } from '../../../store/folders/foldersSelector'
import { FoldersItemTwo } from './FoldersItemTwo'
import st from './MenuItems.module.scss'
import { FolderWritingModal } from '../../../commons/FolderWriting/FolderWritingModal'


export const FoldersItemOne = () => {
  const [open, setOpen] = useState(false)
  const [dialogShow, setDialogShow] = useState(false)
  const folders = useSelector(getFolders)

  return (
    <>
      <ListItem
        className={st.foldersItemOne}
        secondaryAction={
          <IconButton edge={'end'} onClick={() => setDialogShow(true)}>
            <AddIcon />
          </IconButton>
        }
      >
        <ListItemButton onClick={() => setOpen(!open)} role={undefined} dense>
          <ListItemIcon>
            <FolderIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText >Папки</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse
        in={open}
        timeout='auto'
        unmountOnExit
        className={st.foldersList}
      >
        <List disablePadding>
          {folders.map((f) => (
            <FoldersItemTwo {...f} key={f.id} />
          ))}
        </List>
      </Collapse>



      <FolderWritingModal open={dialogShow} onHide={() => setDialogShow(false)} />
    </>
  )
}
