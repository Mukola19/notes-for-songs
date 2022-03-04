import React from "react"
import { useSelector } from "react-redux"
import { Header } from "../../commons/Header/Header"
import { SearchForm } from "../../component/Search/SearchForm"
import { ListSongs } from "../../component/ListSongs/ListSongs"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import { useHistory } from "react-router-dom"
import st from "./ListSongs.page.module.scss"
import { AppToolbar } from "../../commons/AppToolbar/AppToolbar"

export const ListSongsPage = () => {
  const songs = useSelector((state) => state.songs.array)
  const { push } = useHistory()

  // const options = [
  //   { id: 2, name: " Квітучий" },
  //   { id: 3, name: " Квітучий" },
  //   { id: 4, name: " Квітучий" },
  // ]

  return (
    <div className={st.songsPage}>
      <Header>
      <AppToolbar/>

      </Header>

      <ListSongs songs={songs} />

      <SpeedDial
        ariaLabel="Додати пісню"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={() => push("/songwriting")}
        icon={<SpeedDialIcon />}
      ></SpeedDial>
    </div>
  )
}
