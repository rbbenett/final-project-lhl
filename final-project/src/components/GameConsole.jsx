import React, { useState, setState, useEffect } from 'react';
import "./GameConsole.css"
import axios from "axios";
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl, Card } from 'react-bootstrap';
import GameCompleteMsg from './GameCompleteMsg';
import useApplicationData from "../hooks/useApplicationData"

function GameConsole(props) {

  const [seconds, setSeconds] = useState(30);
  const [typingIn, setTypingIn] = useState("");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [intervalId, setIntervalId] = useState(null)

  const Timer = function (seconds){
    setSeconds(seconds)
    if (seconds > 0) {
      setIntervalId(setInterval(() => setSeconds((s) => s-1), 1000))
    } else {
      setSeconds("Game Over");
    }
  }

  const totalWordsCorrect = function(inputField, currentLevelContent) {
    const typedIn = inputField.split(' ')
    const matchingwords = []
    for (let i = 0; i < typedIn.length; i++) {
      if(typedIn[i] === currentLevelContent[i])
      matchingwords.push(typedIn[i])
      }
    return matchingwords.length
  }

  useEffect(() => {
    if(seconds === 0){
      setSeconds("Game Over")
      let currentLevelWords = props.contents[currentLevel].content.split(' ')
      let totalOfCorrectWords = totalWordsCorrect(typingIn, currentLevelWords)
      clearInterval(intervalId)
      axios.post('http://localhost:3004/api/attempts', {
        user_id: "",
        level_id: currentLevel + 1,
        words_completed: totalOfCorrectWords,
        time_taken: 30,
        passed: false
    })
    }
  },[seconds, intervalId]);

  const startGame = function() {
    clearInterval(intervalId)
    setCurrentLevel(0);
    Timer(30)
  }

  //Post request to attempts if both the text areas are the same
  useEffect(() => {
    if(typingIn === props.contents[currentLevel]?.content && typingIn !== "") {
      console.log("MATCH")
      console.log(currentLevel + 1) // ask about level Id
      let correctWords = props.contents[currentLevel].content.split(' ').length;
      let secondsLeft = 30 - seconds;
      clearInterval(intervalId);
      Timer(30);
      setCurrentLevel(currentLevel + 1);
      setTypingIn("");
      axios.post('http://localhost:3004/api/attempts', {
        user_id: "",
        level_id: currentLevel + 1,
        words_completed: correctWords,
        time_taken: secondsLeft,
        passed: true
    })
      .then(res => {
        console.log(res);
      })
    }
  }, [typingIn, intervalId]) 

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
          <Card.Header>{seconds}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <div>
                {props.contents[currentLevel]?.content || <GameCompleteMsg />}
              </div>
            </blockquote>
          </Card.Body>
        </Card>
        <br />
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="textarea">TYPE HERE:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" 
            onChange={(event) => setTypingIn(event.target.value)}
            value={typingIn}
            id="textarea"
            aria-label="With textarea" 
            />
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
            Start Level {currentLevel+1}!
          </Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default GameConsole
