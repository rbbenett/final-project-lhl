import React from 'react';
import useApplicationData from "../hooks/useApplicationData";
import { useState, useEffect } from 'react';
import { Navbar, Image, Nav, Dropdown, Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';

function NavbarTC() {

  const {
    loginStatus, 
    setLoginStatus,
  } = useApplicationData();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  useEffect(() => {
    console.log("LOADED!!!", loginStatus)
    setUsername(loginStatus);
  }, [loginStatus])

  return (
    <div className="navbar-tc">
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Image href="/" src="images/typing-icon.png" className="typecraft-logo" />
        </Link>
        <Navbar.Brand href="/">Typecraft</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Navbar.Brand>Welcome back, { localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).username }</Navbar.Brand>
          <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>
          <Nav.Link onClick={handleShowRegister}>Register</Nav.Link>
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
        </Nav>
      </Navbar>

      {/* Modal for Login Form */}
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {handleCloseLogin(); handleShowRegister()}}>
            New User? Click Here To Register!
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Register Form */}
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
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
