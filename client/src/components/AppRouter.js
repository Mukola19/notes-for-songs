import React  from "react"
import {  Route, Switch, Redirect } from "react-router-dom"
import { SongPage } from "../pages/Song-page/Song.page"
import { SongsPage } from "../pages/Songs-page/Songs.page"
import { AuthPage } from "../pages/Auth-page/Auth.page"
import { SongwritingPage } from "../pages/Songwriting-page/Songwriting-page"
import { SettingsPage } from "../pages/Settings-page/Settings.page"
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


