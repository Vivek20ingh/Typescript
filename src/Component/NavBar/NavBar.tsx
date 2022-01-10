import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar } from 'react-bootstrap'





const NavBar =()=>{
  return (
  <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="Home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="Form" >Form </Nav.Link>
      <Nav.Link href="List" > List</Nav.Link>      
    </Nav>
      
    </Container>
  </Navbar>
   </div>
  
  )
}

export default NavBar;