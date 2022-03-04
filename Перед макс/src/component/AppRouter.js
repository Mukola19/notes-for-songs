import React  from "react"
import {  Route, Switch, Redirect } from "react-router-dom"
import { SongPage } from "../page/Song-page/Song.page"
import { ListSongsPage } from "../page/ListSongs-page/ListSongs.page"
import { HomePage } from "../page/Home-page/Home.page"
import { useAuth } from "../hooks/useAuth"
import { AuthPage } from "../page/Auth-page/Auth.page"
import { SongwritingPage } from "../page/Songwriting-page/Songwriting-page"
import { TypesPage } from "../page/Types-page/Types.page"

export const AppRouter = () => {
const { isAuth } = useAuth()

  

  return isAuth ? (
    <Switch>
      <Route path="/songwriting/:songId?" render={() => <SongwritingPage />} />
      <Route path="/types" render={() => <TypesPage />} />
      <Route path="/song/:id?" render={() => <SongPage />} />
      <Route path="/songs" render={() => <ListSongsPage />} />
      <Route path="/home" render={() => <HomePage />} />
      <Redirect to={"/home"} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/auth" render={() => <AuthPage/>} />
      <Redirect to={"/auth"} />
    </Switch>
  )
}
