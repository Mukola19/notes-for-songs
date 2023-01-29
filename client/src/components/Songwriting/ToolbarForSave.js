import React from 'react'
import { IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import FolderIcon from '@mui/icons-material/Folder'
import wordLength from '../../utils/wordLength'
import st from './Songwriting.module.scss'

// Панель управлявління 
export const ToolbarForSave = ({ showElection, nameFolder }) => {
  return (
    <div className={st.toolbar}>
      <div className={st.selectedFolder}>
        {/* Відкриває діалогове вікно, де вибирається папка */}
        <div onClick={showElection} className={st.buttonFolderSelect}>
          <FolderIcon />
          <span>{wordLength(nameFolder || 'Без папки')}</span>
        </div>
      </div>

      {/* Субмітиться форма */}
      <IconButton type='submit'>
        <SaveIcon />
      </IconButton>
    </div>
  )
}
