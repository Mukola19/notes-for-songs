import React from "react"
import { Box, List } from "@mui/material"
import { ItemSong } from "./ItemSong"
import st from "./ListSongs.module.scss"

export const ListSongs = ({ songs }) => {
  return (
      <Box className={st.box}>
        <List>
          {songs?.map((song) => (
            <ItemSong {...song}  key={song.id} />
          ))}
        </List>
      </Box>
  )
}
