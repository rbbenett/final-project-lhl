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
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';

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
<<<<<<< HEAD
        <Navbar.Brand href="/">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
=======
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Nav>
>>>>>>> 40c3e1b2ab7816ca940c445dfb6d7aec1584305e
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

<<<<<<< HEAD

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

=======
>>>>>>> 40c3e1b2ab7816ca940c445dfb6d7aec1584305e
      {/* Once logged in */}
      {/* <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Navbar.Brand>Welcome back, Bob</Navbar.Brand>
            <Nav.Link href="#id">View profile</Nav.Link>
            <Nav.Link eventKey={2} href="#logout">Logout</Nav.Link>
            <div class="collapse navbar-collapse" id="navbar-list-4">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle" />
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Dashboard</a>
                <a class="dropdown-item" href="#">Edit Profile</a>
                <a class="dropdown-item" href="#">Log Out</a>
              </div>
            </li>
          </ul>
        </div>
          </Nav>
      </Navbar>
      {/* <Footer /> */}
      {/* <Leaderboard/> */}
      {/* <Welcomepage /> */}
      {/* <GameConsole /> */}
    </div>
    </Router>
  );
}

export default App;