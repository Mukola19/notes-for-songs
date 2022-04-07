import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import queryString from "query-string"
import { getSongs } from "../../store/songs/songsSelector"
import { requestSongs } from "../../store/songs/songsThunk"
import { useLocation } from "react-router-dom"
import st from "./Songs.page.module.scss"
import { List, Paper, Typography } from "@mui/material"
import { ItemSong } from "../../components/Songs/ItemSong"

export const SongsPage = () => {
  const songs = useSelector(getSongs)
  const dispatch = useDispatch()
  const location = useLocation()
  const { folderId } = queryString.parse(location.search)

  useEffect(() => {
    if (folderId) {
      dispatch(requestSongs(folderId))
      return
    }
    dispatch(requestSongs())
  }, [folderId])

 
  return (
    <Paper className={st.paperList}>
      <List>
        {!songs.lenght ? (
          songs?.map((song) => <ItemSong {...song} key={song.id} />)
        ) : (
          <Typography variant="h6" component="h4">
          У вас не шиша немає, пісень
          </Typography>
        )}
      </List>
    </Paper>
  )
}

