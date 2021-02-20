import React, { useState } from 'react';
import { Navbar, Image, Nav, Dropdown, Modal } from 'react-bootstrap';
import useApplicationData from "../hooks/useApplicationData";
import Register from './Register';
import Login from './Login';
import './NavbarTC.css'

export default function NavbarTC() {

  const { checkLoggedIn } = useApplicationData();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const userAvatar = (localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).avatar)

  return (
    <div className="navbar-tc">
      <Navbar style={{ backgroundImage: `url("./images/wood.png")` }} sticky="top" collapseOnSelect expand="lg" variant="dark" >
        <Navbar.Brand style={{ marginBottom: "9px", marginRight: "0" }} href="/">
          <Image href="/" src="images/typecraft-logo.png" className="typecraft-logo" />
        </Navbar.Brand>
        <Navbar.Brand href="/" className="typecraft-navbar-name">TypeCraft</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Navbar.Brand> {checkLoggedIn() && 'Welcome back, ' + JSON.parse(localStorage.getItem("user_details")).username}</Navbar.Brand>
          {!checkLoggedIn() && <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>}
          {!checkLoggedIn() && <Nav.Link onClick={handleShowRegister}>Register</Nav.Link>}
          {checkLoggedIn() &&
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {userAvatar === "Dinosaur" ?
                  <Image variant="top" src="images/dinosaur.png" className="navbar-avatar" />
                  : userAvatar === "Ghost" ?
                    <Image variant="top" src="images/ghost.png" className="navbar-avatar" />
                    : userAvatar === "Monster" ?
                      <Image variant="top" src="images/monster.png" className="navbar-avatar" />
                      : userAvatar === "Unicorn" ?
                        <Image variant="top" src="images/unicorn.png" className="navbar-avatar" />
                        : userAvatar === "Fox" ?
                          <Image variant="top" src="images/fox.png" className="navbar-avatar" />
                          :
                          <Image variant="top" src="images/sample-avatar.jpg" className="navbar-avatar" />
                }
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
            <Nav.Link
              className="navLink"
              variant="primary"
              onClick={() => { handleCloseLogin(); handleShowRegister() }}
            >
              New User? Click Here To Register!
          </Nav.Link>
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
          <Nav.Link
            className="navLink"
            variant="primary"
            onClick={() => { handleCloseRegister(); handleShowLogin() }}
          >
            Already Registered? Click Here To Login!
          </Nav.Link>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
