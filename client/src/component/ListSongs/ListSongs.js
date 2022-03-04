import React from "react"
import { Box, List, Paper } from "@mui/material"
import { ItemSong } from "./ItemSong"
import { AppList } from "../../commons/AppList/AppList"

import st from "./ListSongs.module.scss"

export const ListSongs = ({ songs }) => {
  return (
    <AppList className={st.list}>
      {songs?.map((song) => (
        <ItemSong {...song} key={song.id} />
      ))}
    </AppList>
  )
}
