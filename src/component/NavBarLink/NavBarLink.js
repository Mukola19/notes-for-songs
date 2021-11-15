import React from "react";
import st from './NavBarLink.module.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBarLink = () => {
  return (
    <Navbar bg="dark" variant="dark" className={st.footer}>
      <Container>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link ">
              Додому
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/addSong" className="nav-link ">
              Додати
            </NavLink>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};
