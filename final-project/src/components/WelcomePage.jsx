import React, { useState } from 'react';
import { Container, Jumbotron, Image, Button, Fade } from 'react-bootstrap';
import Typing from "react-typing-animation";
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import "./WelcomePage.css";
import useApplicationData from '../hooks/useApplicationData';


function Welcomepage() {

  const playGameSoundUrl = "./sounds/SuperMarioBros.mp3";

  const [playGameSound] = useSound(playGameSoundUrl);

  return (
    <div className="welcome-container">
      <Jumbotron fluid>
        <Container>
          <Image src="images/keyboard.png" className="typing-icon" />
          <h1>
            <Typing speed={60}>
              Welcome to TypeCraft!
            </Typing>
          </h1>
          <h2>
          <Typing startDelay={2000} speed={60}>
              10 Levels!!!
            </Typing>
          </h2>
          <h2>
          <Typing startDelay={3000} speed={60}>
              30 Seconds!!!
            </Typing>
          </h2>
          <h2>
          <Typing startDelay={4000} speed={60}>
              Do you have what it takes???
            </Typing>
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

