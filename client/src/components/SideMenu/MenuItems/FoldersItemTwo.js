import React, { useState } from 'react'
import { useDispatch  } from 'react-redux'
import { StringParam } from 'use-query-params'
import cl from 'classnames'
import { useAppQueryParam } from '../../../hooks/useAppQueryParams'
import { ListItemButton, ListItemText, ListItem, ListItemIcon, MenuItem } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import wordLength from '../../../utils/wordLength'
import { AppMenu } from '../../../commons/AppMenu/AppMenu'
import { FolderWritingModal } from '../../../commons/FolderWriting/FolderWritingModal'
import { deleteFolder } from '../../../store/folders/foldersThunk'
import st from './MenuItems.module.scss'


export const FoldersItemTwo = ({ name, id }) => {
  const [folderId, setFolderId] = useAppQueryParam('folderId',StringParam,'/songs')
  const [dialogShow, setDialogShow] = useState(false)
  const dispatch = useDispatch()

  const deleteFolderHandler = () => {
    dispatch(deleteFolder(id))
  }

  const selectFolder = () => {
    if (folderId !== id) {
      setFolderId(id)
    }
  }

  return (
    <>
      <ListItem
        className={st.foldersItemTwo}
        secondaryAction={
          <AppMenu>
            <MenuItem onClick={deleteFolderHandler}>Видалити</MenuItem>
            <MenuItem onClick={() => setDialogShow(true)}>Редагувати</MenuItem>
          </AppMenu>
        }
      >
        <ListItemButton onClick={selectFolder} role={undefined} dense>
          <ListItemIcon className={st.foldersItemTwo__icon}>
            <FolderIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText className={cl({ [st.active]: folderId === id })}>
            {wordLength(name)}
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <FolderWritingModal
        open={dialogShow}
        onHide={() => setDialogShow(false)}
        folderId={id}
      />
    </>
  )
}
