import React, { useState } from 'react';
import { Navbar, Image, Nav, Dropdown, Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import Register from './Register';
import Login from './Login';

function NavbarTC() {

  const { checkLoggedIn } = useApplicationData();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div className="navbar-tc">
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{marginBottom: "9px", marginRight: "0"}} href="/">
          <Image href="/" src="images/keyboard.png" className="typecraft-logo" />
        </Navbar.Brand>
        <Navbar.Brand href="/">TypeCraft</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Navbar.Brand> {checkLoggedIn() && 'Welcome back, ' + JSON.parse(localStorage.getItem("user_details")).username}</Navbar.Brand>
          {!checkLoggedIn() && <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>}
          {!checkLoggedIn() && <Nav.Link onClick={handleShowRegister}>Register</Nav.Link>}
          {checkLoggedIn() && 
            <Dropdown>
              <Dropdown.Toggle variant={'dark'} id="dropdown-basic">
                <Image src="images/fox.jpg" className="navbar-avatar" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-container">
                <Dropdown.Item href="/profile">View Profile</Dropdown.Item>
                <Dropdown.Item href="/leaderboard">View Leaderboard</Dropdown.Item>
                <Dropdown.Item 
                  href="/"
                  onClick={() => localStorage.clear()}
                  >Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          }
        </Nav>
      </Navbar>

      {/* Modal for Login Form */}
      {!checkLoggedIn() &&
        <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login 
            handleCloseLogin={handleCloseLogin}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {handleCloseLogin(); handleShowRegister()}}>
            New User? Click Here To Register!
          </Button>
        </Modal.Footer>
      </Modal>
      }


      {/* Modal for Register Form */}
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register 
            handleCloseRegister={handleCloseRegister}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {handleCloseRegister(); handleShowLogin()}}>
            Already Registered? Click Here To Login!
          </Button>
        </Modal.Footer>
      </Modal>     
    </div>
  )
}

export default NavbarTC
