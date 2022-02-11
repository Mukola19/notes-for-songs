import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useHistory } from "react-router-dom";
import { Context } from "../..";
import st from "./NavBar.module.scss";
import settingImg from "../../img/setting.png";
import logoutImg from "../../img/logout.png";
import userImg from "../../img/user.png";
import logIn from "../../img/log-in.png";
import { AuthModal } from "./AuthModal";
import { AppModal } from "../Common/AppModal/AppModal";

export const NavBar = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  return (
    <Navbar bg="darker" expand="lg" className={st.navBar} expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offpfr"
          placement="start"
          className={st.offcanvas}
        >
          <Offcanvas.Header className={st.offcanvasHeader}>
            <Offcanvas.Title
              id="offpfr"
              className={st.offcanvasTitle}
            >
              <img src={user ? user.photoURL : userImg} />
              <span className={st.displayName}>{user?.displayName}</span>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className={st.offcanvasNav}>
              <NavLink to="/">
                <img src={settingImg} /> Настройкi
              </NavLink>

              {user ? (
                <span onClick={() => signOut(auth)}>
                  <img src={logoutImg} /> Вийти
                </span>
              ) : (
                <span  onClick={() => setShowModal(true)}>
                  <img src={logIn} /> Війти
                </span>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <AppModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          title="Вхід"
        >
          <AuthModal handleClose={() => setShowModal(false)}/>
        </AppModal>

        {children}
      </Container>
    </Navbar>
  );
};
