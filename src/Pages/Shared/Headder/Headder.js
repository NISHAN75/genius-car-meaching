import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import mLogo from "../../../images/logo.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from "firebase/auth";


const Headder = () => {
  const [user]= useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
  }

  return (
    <header>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <img src={mLogo} alt="" height={30} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  href="home#services">Services</Nav.Link>
              <Nav.Link  href="home#expert">Expert</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              {
                user?
                <button onClick={handleSignOut} className="btn btn-info">Sign Out</button> 
                 :
                <Nav.Link eventKey={2} as={Link} to='/login'>
                Login
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Headder;
