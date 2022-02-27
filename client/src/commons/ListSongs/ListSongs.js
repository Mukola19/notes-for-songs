import React from "react"
import { ItemSong } from "./ItemSong"
import st from "./ListSongs.module.scss"

export const ListSongs = ({ songs }) => {
  return (
    <ul className={st.ul}>
      {songs?.map(item => (
        <ItemSong {...item} key={item.id} />
      ))}
    </ul>
  )
}
