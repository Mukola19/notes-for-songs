import React from "react"
import st from "./Header.module.scss"
import arrow from "../../img/left-arrow.png"
import { NavLink, useHistory } from "react-router-dom"

export const Header = ({ children }) => {
  const { goBack } = useHistory()

  return (
    <header className={st.header}>
      {/* <img src={arrow} width={30} onClick={goBack}  className={st.arrow}/> */}
      <NavLink to={'/home'} className={st.homeLink}>Home</NavLink>
      {children}
    </header>
  )
}
