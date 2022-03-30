import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import queryString from "query-string"
import { ListSongs } from "../../component/ListSongs/ListSongs"
import { getSongs } from "../../store/songs/songsSelector"
import { requestSongs } from "../../store/songs/songsThunk"
import { useLocation } from "react-router-dom"
import st from "./Songs.page.module.scss"


export const SongsPage = () => {
  const songs = useSelector(getSongs)
  const dispatch = useDispatch()
  const location = useLocation()
  const { folderId } = queryString.parse(location.search)


  useEffect(() => {
    if (folderId) {
      dispatch(requestSongs(folderId))
      return
    }
    dispatch(requestSongs())
  }, [])

  useEffect(() => {
    dispatch(requestSongs(folderId))
  }, [folderId])

  return (
    <div className={st.songsPage}>
      <ListSongs songs={songs} />
    </div>
  )
}
