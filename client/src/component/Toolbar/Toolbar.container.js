import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteSong } from "../../store/thunks/songsThunk"
import { Toolbar } from "./Toolbar"

export const ToolbarContainer = ({ song, ...props }) => {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const removeSong = () => dispatch(deleteSong(song.id, push))

  return <Toolbar {...props} removeSong={removeSong} text={song.name + '\n \n'+ song.body}/>
}
