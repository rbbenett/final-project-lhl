import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Components
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Profile from "./components/Profile.jsx";
import Welcomepage from "./components/WelcomePage.jsx";
import GameConsole from "./components/GameConsole.jsx";

// Import Bootstrap Components
import { Navbar, Nav, Modal, Button, Image, Dropdown, DropdownButton } from 'react-bootstrap';

// Import stylesheets
import './App.css';

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <Router>
      <div className="app">
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/">
            <Image href="/" src="images/typing-icon.png" className="typecraft-logo" />
          </Link>
          <Navbar.Brand href="/">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Navbar.Brand>Welcome back, Bob</Navbar.Brand>
            <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>
            <Nav.Link onClick={handleShowRegister}>Register</Nav.Link>
            <Nav.Link href="/profile">View profile</Nav.Link>
            <Nav.Link eventKey={2} href="/">Logout</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant={'dark'} id="dropdown-basic">
                <Image src="images/fox.jpg" className="navbar-avatar" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-container">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
            <Login />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseLogin}>
              Forgot Username or Password?
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
        </Modal>


        <Switch>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/play">
            <GameConsole />
          </Route>
          <Route path="/">
            <Welcomepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;