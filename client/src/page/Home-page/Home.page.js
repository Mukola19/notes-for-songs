import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeHeader } from '../../component/HomeHeader/HomeHeader'
import imgAdd from '../../img/writing.png'
import imgSong from '../../img/document.png'
import imgSearch from '../../img/loupe.png'
import imgGuestion from '../../img/question.png'
import st from './Home.page.module.scss'
import { useAuth } from '../../hooks/useAuth'
import { Loader } from '../../commons/Loader/Loader'

export const HomePage = () => {


  return (
    <div>
      <HomeHeader/>
      <div className={st.homePage}>
       
        <NavLink to='/songs' >
          <img src={imgSearch} width={100} />
        </NavLink>

        <NavLink to='/songs'>
          <img src={imgSong} width={110} />
        </NavLink>

        <NavLink to='/songwriting'>
          <img src={imgAdd} width={100} />
        </NavLink>

        <NavLink to={'/song/' +3}>
          <img src={imgGuestion} width={110} />
        </NavLink>
      </div>
    </div>
  )
}
