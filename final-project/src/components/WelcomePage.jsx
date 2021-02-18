import React, { useState } from 'react';
import { Container, Jumbotron, Image, Button, Fade } from 'react-bootstrap';
import Typing from "react-typing-animation";
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import "./WelcomePage.css";
import useApplicationData from '../hooks/useApplicationData';


function Welcomepage() {

  const { checkLoggedIn } = useApplicationData();

  const playGameSoundUrl = "./sounds/SuperMarioBros.mp3";
  const playTypeSoundURL = "./sounds/type.mp3";

  const [playGameSound] = useSound(playGameSoundUrl);
  const [playTypeSound] = useSound(playTypeSoundURL)

  const [index, setIndex] = useState(0);

  return (
    <div className="welcome-container">
      <Jumbotron fluid className="container-of-bg" style={{marginBottom: 0}}>
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
          <DelayLink delay={3000} to="/play" clickAction={playGameSound} replace={false}>
            <Button className="startGameButton" variant="primary" size="lg">Play Game</Button>
          </DelayLink>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Welcomepage

