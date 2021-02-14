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
            <div class="collapse navbar-collapse" id="navbar-list-4">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="25" height="25" class="rounded-circle" />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Dashboard</a>
                      <a class="dropdown-item" href="#">Edit Profile</a>
                      <a class="dropdown-item" href="#">Log Out</a>
                    </div>
                  </li>
                </ul>
              </div>
            <div>
              <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
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
      </div>
    </Router>
  );
}

export default App;