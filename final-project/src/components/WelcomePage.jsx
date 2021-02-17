import React from 'react';
import { Container, Jumbotron, Image, Button, Carousel } from 'react-bootstrap';
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import "./WelcomePage.css";

function Welcomepage() {
  const soundUrl = "./sounds/roll.mp3";

  const [play] = useSound(soundUrl);

  return (
    <div className="welcome-container">
      <Jumbotron fluid>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <Container>
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

        </Container> */}
         <DelayLink delay={3000} to="/play" clickAction={play} replace={false}>
        <Button variant="primary" size="lg">Play Game</Button>
      </DelayLink>
      </Jumbotron>
    </div>
  )
}

export default Welcomepage

