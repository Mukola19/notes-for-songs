import React from "react"
import { useSelector } from "react-redux"
import { Header } from "../../commons/Header/Header"
import { SearchForm } from "../../component/Search/SearchForm"
import { ListSongs } from "../../commons/ListSongs/ListSongs"
import st from "./ListSongs.page.module.scss"
import { AppFilter } from "../../commons/AppFilter.js/AppFilter"

export const ListSongsPage = () => {

  const songs = useSelector(state => state.songs.array)
 

  const options = [
    { id: 2, name: " Квітучий"},
    { id: 3, name: " Квітучий"},
    { id: 4, name: " Квітучий"},
  ]





  return (
    <div className={st.songsPage}>
      <Header className={st.headerForm}>
      <SearchForm />
      <AppFilter options={options} title='wewe' isChose={id => console.log(id)}/>
      </Header>



      <ListSongs songs={songs} />
    </div>
  )
}
