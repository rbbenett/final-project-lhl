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
  
  const resetLevel = function () {
    clearInterval(intervalId)
    setCurrentLevel(currentLevel);
    Timer(30)
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
    .catch(error => (console.log(error)))
    }
  },[seconds, intervalId]);

  const startGame = function() {
    if(currentLevel === 0){
      clearInterval(intervalId)
      setCurrentLevel(0);
      Timer(30)
    } else {
      clearInterval(intervalId)
      Timer(30)
    }
  }

  const restartfromFirstLevel = function() {
    clearInterval(intervalId)
      setCurrentLevel(0);
      Timer(30)
  }

  //Post request to attempts if both the text areas are the same
  useEffect(() => {
    if(typingIn === props.contents[currentLevel]?.content && typingIn !== "") {
      let correctWords = props.contents[currentLevel].content.split(' ').length;
      let secondsLeft = 30 - seconds;
      clearInterval(intervalId);
      setCurrentLevel(currentLevel + 1);
      setSeconds(30)
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
      .catch(error => (console.log(error)))
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
        <ProgressBar aria-valuemin="0" aria-valuemax="100" animated now={props.contents[currentLevel]? (typingIn.length/props.contents[currentLevel].content.length) * 100 : 1} variant="success" />
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
          {seconds === 30 ? 
            <Button variant="primary">
              Resume from Level X
            </Button> : null || 
            <Button variant="primary" onClick={resetLevel}>
            Restart Level 
            </Button>}
          {seconds === 30 ? 
            <Button
              variant="primary"
              onClick={startGame}
            >
            {currentLevel === 0 ? `Start Game ` : `Start Level ${currentLevel+1}!`}
            </Button> ||
            <Button variant="primary" onClick={restartfromFirstLevel}>
            Start from Level 1
            </Button> : null}
        </p>
      </Jumbotron>
    </div>
  )
}

export default GameConsole
