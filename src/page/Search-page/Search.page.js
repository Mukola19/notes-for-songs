import React from "react"
import { Button, Container, Form, Navbar } from "react-bootstrap"
import { SearchForm } from "../../component/Search/SearchForm"
import { NavImg } from "../../component/Common/Elements/NavImg"
import st from "./Search.page.module.scss"
import arrow from "../../img/left-arrow.png"

export const SearchPage = () => {
  return (
    <div>
      <header className={st.header}>
            <NavImg to='/home' src={arrow} width={30} className={st.arrow} />
            <SearchForm />
      </header>
    </div>
  )
}


 