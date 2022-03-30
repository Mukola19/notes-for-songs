import React from "react"
import { Box, List, Paper } from "@mui/material"
import { ItemSong } from "./ItemSong"

import st from "./ListSongs.module.scss"

export const ListSongs = ({ songs }) => {
  return (
    <Box >
      {!songs.lenght ? songs?.map(song => (
        <ItemSong {...song} key={song.id} />
      ))
      : <div className={st.itemMessage}><p>У вас не шиша немає, пісень</p></div> }
    </Box>
  )
}
 