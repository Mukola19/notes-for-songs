import React from "react"
import st from "./App.module.css"
import { BrowserRouter, Route } from "react-router-dom"
import { HomeConteiner } from "./component/Home/HomeConteiner"
import { NavBarLinkConteiner } from "./component/NavBarLink/NavBarLinkConteiner"
import  AddSongConteiner  from "./component/AddSong/AddSongConteiner"

function App(props) {
  return (
    <BrowserRouter>
      <div className={st.body}>
        <Route path="/home" render={() => <HomeConteiner />} />
        <Route path="/AddSong" render={() => <AddSongConteiner />} />
        <Route path="/" render={() => <NavBarLinkConteiner />} />
      </div>
    </BrowserRouter>
  )
}

export default App
