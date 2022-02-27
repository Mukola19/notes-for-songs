import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { notyImg } from "../../img/img"
import trash_bin from "../../img/trash_bin.png"
import { deleteSong } from "../../store/reducers/songsReducer"
import st from "./ListSongs.module.scss"

export const ItemSong = ({ id, name }) => {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const remove = (e) => {
    e.stopPropagation()
    dispatch(deleteSong(id))
  }

  return (
    <li onClick={() => push("/song/" + id)} className={st.li}>
      <span>
        <img src={notyImg} width={35} />
        {name}
      </span>
      <img src={trash_bin} height={30} onClick={remove} />
    </li>
  )
}
