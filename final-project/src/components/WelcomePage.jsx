import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap';

function Welcomepage() {
  return (
    <Jumbotron fluid>
      <Container>
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
      </Container>
    </Jumbotron>
  )
}

export default Welcomepage