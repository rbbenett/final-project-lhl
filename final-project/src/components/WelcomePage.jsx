import React from 'react';
import { Container, Jumbotron, Image, Button } from 'react-bootstrap';
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import "./WelcomePage.css";

function Welcomepage() {
  const soundUrl = "./sounds/roll.mp3";

  const [play] = useSound(soundUrl);

  return (
    <div className="welcome-container">
      <Jumbotron fluid>
        <Container>
          <Image src="images/typing-icon.png" className="typing-icon" />
          <h1>Welcome to Typecraft!</h1>
          <p>
            Before you start playing, here's how the game is going to work:
          </p>
          <ul>
            A selection of words will appear on the screen
          </ul>
          <ul>
            You have to type the worst as fast as possible!
          </ul>
          <ul>
            But, you wont be able to advance on to the next level if there are any mistakes so make sure you check for mistakes as well
          </ul>
          <ul>
            As the levels go up the time allocated to each level will stay the same but the amount of words will get bigger.
          </ul>
          <ul>
            When you run out of time without having finished typing your paragraph, then Game Over
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

