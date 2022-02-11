import React, { useEffect, useState } from 'react'
import st from './AddSongs.page.module.scss'
import { NavImg } from '../../component/Common/Elements/NavImg'
import arrow from '../../img/left-arrow.png'
import { AddSongForm } from '../../component/AddSong/AddSongForm'
import { Button } from 'react-bootstrap'

export const AddSongsPage = () => {
  const [song, setSong] = useState({})



  return (
    <div>
      <header className={st.header}>
        <NavImg to='/home' src={arrow} width={30} className={st.arrow} />
        <Button className={st.button} onClick={() => console.log(song)}>Зберегти</Button>
      </header>
      <AddSongForm setSong={setSong} />
    </div>
  )
}
