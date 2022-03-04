import React, { useState } from "react"
import { AddSongForm } from "../../component/AddSong/AddSongForm"
import { Header } from "../../commons/Header/Header"
import { AppButton } from "../../commons/Elements/AppButton/AppButton"
import { useDispatch, useSelector } from "react-redux"
import { createSong, updateSong } from "../../store/thunks/songsThunk"
import { useHistory, useParams } from "react-router-dom"
import st from "./Songwriting-page.scss"
import { AppDropdown } from "../../commons/AppDropdown/AppDropdown"

export const SongwritingPage = () => {
  const [form, setForm] = useState({})
  const song = useSelector((state) => state.songs.song)
  const dispatch = useDispatch()
  const { push } = useHistory()
  const { songId } = useParams()

  const save = () => {
    songId
      ? dispatch(updateSong({ songId, ...form }, push))
      : dispatch(createSong(form, push))
  }

  return (
    <div>
      <Header>
        {/* <AppDropdown>

        </AppDropdown> */}
        <AppButton onClick={save}>Зберегти</AppButton>
      </Header>

      <AddSongForm setForm={setForm} song={songId ? song : null} />
    </div>
  )
}
