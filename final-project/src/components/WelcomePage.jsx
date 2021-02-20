import React, { useState } from 'react';
import { Container, Jumbotron, Modal, Button } from 'react-bootstrap';
import Typing from "react-typing-animation";
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import { useHistory } from 'react-router-dom';
import "./WelcomePage.css";
import useApplicationData from '../hooks/useApplicationData';
import Register from './Register';
import Login from './Login';


function Welcomepage() {

  const { checkLoggedIn } = useApplicationData();

  const history = useHistory();
  const navigateToPlay = () => {
    history.push("/play");
    history.go(0)
  }

  const playGameSoundUrl = "./sounds/SuperMarioBros.mp3";
  const [playGameSound] = useSound(playGameSoundUrl);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div className="welcome-container">
      <Jumbotron fluid className="container-of-bg" style={{ marginBottom: 0 }}>
        <Container className="welcome-text-box">
          <h1 className="welcome-to-typecraft">
            <Typing speed={60}>
              Welcome to TypeCraft
            </Typing>
          </h1>
          <h2>
            🔥 10 Levels 🔥
          </h2>
          <h2>
            🔥 30 Seconds Each 🔥
          </h2>
          <h2>
            Do you have what it takes?
          </h2>
          {checkLoggedIn() ?
            <DelayLink delay={3000} to="/play" clickAction={navigateToPlay} replace={false}>
              <Button className="startGameButton" variant="primary" size="lg">Play Game</Button>
            </DelayLink>
            :
            <Button className="startGameButton" variant="danger" onClick={handleShowLogin} size="lg">Login to Play</Button>
          }

        </Container>
      </Jumbotron>

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
            <Button variant="primary" onClick={() => { handleCloseLogin(); handleShowRegister() }}>
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
          <Button variant="primary" onClick={() => { handleCloseRegister(); handleShowLogin() }}>
            Already Registered? Click Here To Login!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Welcomepage

