import React  from "react"
import {  Route, Switch, Redirect } from "react-router-dom"
import { SongPage } from "../page/Song-page/Song.page"
import { ListSongsPage } from "../page/ListSongs-page/ListSongs.page"
import { useAuth } from "../hooks/useAuth"
import { AuthPage } from "../page/Auth-page/Auth.page"
import { SongwritingPage } from "../page/Songwriting-page/Songwriting-page"
import { FoldersPage } from "../page/Folders-page/Folders.page"

export const AppRouter = () => {
const { isAuth } = useAuth()

  

  return isAuth ? (
    <Switch>
      <Route path="/songwriting/:songId?" render={() => <SongwritingPage />} />
      <Route path="/folders" render={() => <FoldersPage />} />
      <Route path="/song/:id?" render={() => <SongPage />} />
      <Route path="/songs" render={() => <ListSongsPage />} />
      <Redirect to={"/songs"} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/auth" render={() => <AuthPage/>} />
      <Redirect to={"/auth"} />
    </Switch>
  )
}
