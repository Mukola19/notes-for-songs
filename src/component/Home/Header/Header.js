import React from "react"
import { FormSearch } from "./FormSearch"
import {Container, Form, FormControl, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';




export const Header = (props) => {
  return (<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <FormSearch {...props}/>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
