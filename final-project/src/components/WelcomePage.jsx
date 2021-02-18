import React, { useState } from 'react';
import { Container, Jumbotron, Image, Button, Fade } from 'react-bootstrap';
import Typing from "react-typing-animation";
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import "./WelcomePage.css";
import useApplicationData from '../hooks/useApplicationData';


function Welcomepage() {

  const { checkLoggedIn } = useApplicationData();

  const soundUrl = "./sounds/SuperMarioBros.mp3";

  const [play] = useSound(soundUrl);

  const [index, setIndex] = useState(0);

  return (
    <div className="welcome-container">
      <Jumbotron fluid>
        <Container>
          <Image src="images/keyboard.png" className="typing-icon" />
          <h1>
            <Typing speed={60}>
              Welcome to Typecraft!
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
          <DelayLink delay={3000} to="/play" clickAction={play} replace={false}>
            <Button variant="primary" size="lg">Play Game</Button>
          </DelayLink>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Welcomepage

