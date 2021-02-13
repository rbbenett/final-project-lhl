import './App.css';
import React, { useState } from 'react';
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Profile from "./components/Profile.jsx";
import Welcomepage from "./components/WelcomePage.jsx";
import GameConsole from "./components/GameConsole.jsx";

import { Navbar, Nav, Modal, Button } from 'react-bootstrap';

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div className="app">
      {/* if not loggin in */}
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
          <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>
          <Nav.Link onClick={handleShowRegister}>Register</Nav.Link>
          </Nav>
      </Navbar>

      {/* Modal for Login Form */}
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseLogin}>
            Forgot Username or Password
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
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>









      {/* Once logged in */}
      {/* <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Navbar.Brand>Welcome back, Bob</Navbar.Brand>
            <Nav.Link href="#id">View profile</Nav.Link>
            <Nav.Link eventKey={2} href="#logout">Logout</Nav.Link>
          </Nav>
      </Navbar>
      {/* <Footer /> */}
      {/* <Leaderboard/> */}
      {/* <Welcomepage /> */}
      {/* <GameConsole /> */}
    </div>
  );
}

export default App;