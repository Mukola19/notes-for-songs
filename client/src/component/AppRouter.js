import React  from "react"
import {  Route, Switch, Redirect } from "react-router-dom"
import { SongPage } from "../page/Song-page/Song.page"
import { SongsPage } from "../page/Songs-page/Songs.page"
import { AuthPage } from "../page/Auth-page/Auth.page"
import { SongwritingPage } from "../page/Songwriting-page/Songwriting-page"
import { SettingsPage } from "../page/Settings-page/Settings.page"
import { useSelector } from "react-redux"
import { userIsAuth } from "../store/user/userSelector"

export const AppRouter = () => {
  const isAuth = useSelector(userIsAuth)


  return isAuth ? (
    <Switch>
      <Route path="/songwriting/:songId?" render={() => <SongwritingPage />} />
      <Route path="/song/:id?" render={() => <SongPage />} />
      <Route path="/songs" render={() => <SongsPage />} />
      <Route path="/settings" render={() => <SettingsPage />} />
      <Redirect to={"/songs"} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/auth" render={() => <AuthPage/>} />
      <Redirect to={"/auth"} />
    </Switch>
  )
}


