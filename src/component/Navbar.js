import React, {Component} from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import { ColorsContext } from "./ThemeContext";
import { NavLink } from "react-router-dom"; 
export function NavbarComponent() {
  return(
  <ColorsContext.Consumer>
  {(value)=>{
    return (
      <Navbar expand="lg" style={{backgroundColor: value.colors.bgColor}}>
      <Container>
        <Navbar.Brand href="/" style={{color:value.colors.tColor}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login"  style={{color:value.colors.tColor}}>Login</Nav.Link>
            <Nav.Link href="/profile"  style={{color:value.colors.tColor}}>Profile</Nav.Link>
            <Nav.Link href="/product"  style={{color:value.colors.tColor}}>Products</Nav.Link>
            <Nav.Link href="/todos"  style={{color:value.colors.tColor}}>Posts</Nav.Link>
            <Nav.Link href=""  style={{color:value.colors.tColor}}
            onClick={value.ToggleTheme}
            >Toggle Theme</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }}
  </ColorsContext.Consumer>
   );
  
}