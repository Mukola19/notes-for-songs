import React, { useContext } from "react"
import {  Route, Switch, Redirect } from "react-router-dom"

import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from ".."
import { AddSongsPage } from "../page/AddSongs-page/AddSongs.page"
import { ManagementPage } from "../page/Management-page/Management.page"
import { SongPage } from "../page/Song-page/Song.page"
import { ListSongsPage } from "../page/ListSongs-page/ListSongs.page"
import { HomePage } from "../page/Home-page/Home.page"
import { SearchPage } from "../page/Search-page/Search.page"

export const AppRouter = () => {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)


  

  return user ? (
    <Switch>
      <Route path="/add" render={() => <AddSongsPage />} />
      <Route path="/management" render={() => <ManagementPage />} />
      <Route path="/search" render={() => <SearchPage />} />
      <Route path="/song" render={() => <SongPage />} />
      <Route path="/songs" render={() => <ListSongsPage />} />
      <Route path="/home" render={() => <HomePage />} />
      <Redirect to={"/home"} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/song" render={() => <SongPage />} />
      <Route path="/songs" render={() => <ListSongsPage />} />
      <Route path="/home" render={() => <HomePage />} />

      <Redirect to={"/home"} />
    </Switch>
  )
}
