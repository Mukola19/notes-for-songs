import React from "react"
import { FolderSongItem } from "./FolderSongItem"
import { AppListFolder } from '../../commons/AppList/AppListFolder'
import st from "./Folders.module.scss"



export const FolderItem = ({ name, songs }) => {
  return (
    <AppListFolder className={st.listFolder}  name={name}>
      {songs.map(item => (
        <FolderSongItem key={item.id} {...item} />
      ))}
    </AppListFolder>
  )
}
