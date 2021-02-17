import React, { useState } from 'react';
import { Container, Jumbotron, Image, Button, Fade } from 'react-bootstrap';
import Typing from "react-typing-animation";
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import "./WelcomePage.css";
import Leaderboard from "./Leaderboard"
import useApplicationData from '../hooks/useApplicationData';


function Welcomepage() {

  const { checkLoggedIn } = useApplicationData();

  const soundUrl = "./sounds/SuperMarioBros.mp3";

  const [play] = useSound(soundUrl);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="welcome-container">
      <Jumbotron fluid>
        <Container>
          <Image src="images/typing-icon.png" className="typing-icon" />
          <h1>
            <Typing speed={40}>
              Welcome to Typecraft!
            </Typing>
          </h1>
          <p>
            Before you start playing, here's how the game is going to work:
          </p>
          <ul>
            1. A selection of words will appear on the screen
          </ul>
          <ul>
            2. You have to type the words as fast as possible!
          </ul>
          <ul>
            3. You won't be able to advance on to the next level if there are any mistakes so make sure you check for mistakes as well
          </ul>
          <ul>
            4. As the levels go up. the time allocated to each level will stay the same but the amount of words will get bigger.
          </ul>
          <ul>
            5. When you run out of time without having finished typing your paragraph, Game Over!
          </ul>
          <DelayLink delay={3000} to="/play" clickAction={play} replace={false}>
            <Button variant="primary" size="lg">Play Game</Button>
          </DelayLink>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Welcomepage

