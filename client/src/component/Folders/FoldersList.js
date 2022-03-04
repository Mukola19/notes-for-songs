import React from 'react'
import { FolderItem } from './FolderItem'
import { AppList } from '../../commons/AppList/AppList'
import st from "./Folders.module.scss"


export const FoldersList = ({ folders }) => {
  return (
    <AppList className={st.list}>
      {folders.map(folder => (
        <FolderItem {...folder} key={folder.id} />
      ))}
    </AppList>
  )
}
