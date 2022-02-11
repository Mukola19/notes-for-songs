import React from 'react'
import imgAdd from '../../img/writing.png'
import imgSong from '../../img/document.png'
import imgSearch from '../../img/loupe.png'
import imgGuestion from '../../img/question.png'
import { NavBar } from '../../component/NavBar/NavBar'
import { NavLink } from 'react-router-dom'
import st from './Home.page.module.scss'

export const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <div className={st.homePage}>
       
        <NavLink to='/search' >
          <img src={imgSearch} width={100} />
        </NavLink>

        <NavLink to='/add'>
          <img src={imgSong} width={110} />
        </NavLink>

        <NavLink to='/add'>
          <img src={imgAdd} width={100} />
        </NavLink>

        <NavLink to='/'>
          <img src={imgGuestion} width={110} />
        </NavLink>
      </div>
    </div>
  )
}
