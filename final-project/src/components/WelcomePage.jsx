import React, { useState } from 'react';
import { Container, Jumbotron, Image, Button, Carousel } from 'react-bootstrap';
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import "./WelcomePage.css";
import Leaderboard from "./Leaderboard"


function Welcomepage() {
  const soundUrl = "./sounds/roll.mp3";

  const [play] = useSound(soundUrl);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="welcome-container">
      <Jumbotron fluid>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/rick.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
            <Image src="images/typing-icon.png" className="typing-icon" />
              <h1>Welcome to Typecraft!</h1>
              <p>
                Before you start playing, here's how the game is going to work:
              </p>
              <ul>
                1. A selection of words will appear on the screen
              </ul>
              <ul>
                2. You have to type the worst as fast as possible!
              </ul>
              <ul>
                3. But, you wont be able to advance on to the next level if there are any mistakes so make sure you check for mistakes as well
              </ul>
              <ul>
                4. As the levels go up the time allocated to each level will stay the same but the amount of words will get bigger.
              </ul>
              <ul>
                5. When you run out of time without having finished typing your paragraph, then Game Over
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/rick.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <Leaderboard />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/rick.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <DelayLink delay={3000} to="/play" clickAction={play} replace={false}>
          <Button className="play-game" variant="primary" size="lg">Play Game</Button>
        </DelayLink>
      </Jumbotron>
    </div>
  )
}

export default Welcomepage

