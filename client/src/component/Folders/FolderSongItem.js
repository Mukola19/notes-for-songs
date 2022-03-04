import React from 'react'
import { AppListItem } from '../../commons/AppList/AppListItem'
import st from "./Folders.module.scss"



export const FolderSongItem = ({ name }) => {
  return (
    <AppListItem  name={name} />
  )
}
