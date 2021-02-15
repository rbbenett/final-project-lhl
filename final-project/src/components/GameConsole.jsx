import React, { useState, setState, useEffect } from 'react';
import "./GameConsole.css"
import axios from "axios";
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl, Card } from 'react-bootstrap';
import GameCompleteMsg from './GameCompleteMsg';

function GameConsole(props) {

  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('BOOOOM!');
    }
  });

  const [typingIn, setTypingIn] = useState("");
  const [currentLevel, setCurrentLevel] = useState(0);

  const startGame = function() {
    setCurrentLevel(currentLevel + 1);
    console.log(currentLevel);
    // updateGameConsole(currentLevel);
    // startTimer()
  }

  //Post request to attempts if both the text areas are the same
  useEffect(() => {
    if(typingIn === props.contents[currentLevel - 1]?.content && typingIn !== "") {
      console.log("MATCH")
      setCurrentLevel(currentLevel + 1)
      axios.post('http://localhost:3004/api/attempts', {
        user_id: "",
        level_id: "",
        words_completed: "",
        time_taken: "",
        passed: true
    })
      .then(res => {
        console.log(res);
      })
    }
  }, [typingIn]) 

  return (
    <div className="gameconsole">
      <Jumbotron>
        <h1>TypeCraft</h1>
        <>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </>
        <br /><br /><br />
        <ProgressBar animated now={45} variant="success" />
        <br />
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {props.contents[currentLevel - 1]?.content || <GameCompleteMsg />}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br />
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="textarea">TYPE HERE:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" onChange={(event) => setTypingIn(event.target.value)} id="textarea"aria-label="With textarea" />
        </InputGroup>
        <br />
        <p>
          <Button variant="primary">
            Resume from Level X
          </Button>
          <Button
            variant="primary"
            onClick={startGame}
          >
            Start Level 1!
          </Button>
        </p>
      </Jumbotron>

    </div>
  )
}

export default GameConsole
