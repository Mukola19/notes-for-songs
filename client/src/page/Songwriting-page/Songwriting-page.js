import React, { useState } from "react"
import { AddSongForm } from "../../component/AddSong/AddSongForm"
import { useDispatch, useSelector } from "react-redux"
import { createSong, updateSong } from "../../store/songs/songsThunk"
import { useHistory, useParams } from "react-router-dom"
import { getSong } from "../../store/songs/songsSelector"
import st from "./Songwriting-page.scss"



export const SongwritingPage = () => {
  const song = useSelector(getSong)
  const dispatch = useDispatch()
  const { push } = useHistory()
  const { songId } = useParams()

  const saveing = (data) => {
    return console.log(data);
    songId
      ? dispatch(updateSong({ songId, ...data }, push))
      : dispatch(createSong(data, push))
  }

  return (
      <AddSongForm
        song={songId ? song : null}
        saveing={saveing}
      />
  )
}
