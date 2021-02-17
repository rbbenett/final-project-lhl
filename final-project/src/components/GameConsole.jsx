import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl, Card } from 'react-bootstrap';
import GameCompleteMsg from './GameCompleteMsg';
import "./GameConsole.css"

function GameConsole(props) {

  const [seconds, setSeconds] = useState(30);
  const [typingIn, setTypingIn] = useState("");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [intervalId, setIntervalId] = useState(null)
  const [levelContent, setLevelContent] = useState("")
  const [levelStarted, setLevelStarted] = useState(false)

  //Timer to start and set seconds
  const Timer = function (seconds) {
    setLevelStarted(true)
    setSeconds(seconds)
    if (seconds > 0) {
      setIntervalId(setInterval(() => setSeconds((s) => s - 1), 1000))
    } else {
      setSeconds("Game Over");
    }
  }

  //Highlights the words that are right
  const highlightWords = (event) => {
    let value = event.target.value;
    let txt = document.getElementById("console-text").innerText;
    let idx = txt.indexOf(value);
    if (idx >= 0) {
      let newText = [txt.substring(0, idx), <strong>{txt.substring(idx, idx + value.length)}</strong>, txt.substring(idx + value.length)];
      setTypingIn(value);
      setLevelContent(newText);
    } else {
      setLevelContent(levelContent);
      setTypingIn(value);
    }
  }

  //If they dont finish a level, this calcuates how many words were correct
  const totalWordsCorrect = function (inputField, currentLevelContent) {
    const typedIn = inputField.split(' ')
    const matchingwords = []
    for (let i = 0; i < typedIn.length; i++) {
      if (typedIn[i] === currentLevelContent[i])
        matchingwords.push(typedIn[i])
    }
    return matchingwords.length
  }

  //Triggered when they want to reset the current level
  const resetLevel = function () {
    setLevelStarted(false)
    setLevelContent("Are You Ready To Start?")
    setTypingIn("");
    clearInterval(intervalId)
    setCurrentLevel(currentLevel);
    setSeconds(30)
  }

  //What happens when the timer reaches 0
  useEffect(() => {
    if (seconds === 0) {
      setSeconds("Game Over")
      let currentLevelWords = props.contents[currentLevel].content.split(' ')
      let totalOfCorrectWords = totalWordsCorrect(typingIn, currentLevelWords)
      setLevelContent("GameOver")
      clearInterval(intervalId)
      axios.post('/attempts', {
        user_id: JSON.parse(localStorage.getItem("user_details"))?.id,
        level_id: currentLevel + 1,
        words_completed: totalOfCorrectWords,
        time_taken: 30,
        passed: false
      })
        .catch(error => (console.log(error)))
    }
  }, [seconds, intervalId]);

  //Starts the timer and the sets the level up
  const startGame = function () {
    setLevelStarted(true)
    if (currentLevel === 0) {
      setTypingIn("");
      setLevelContent(props.contents[currentLevel]?.content)
      clearInterval(intervalId)
      setCurrentLevel(0);
      Timer(30)
    } else {
      setTypingIn("");
      clearInterval(intervalId)
      setLevelContent(props.contents[currentLevel]?.content)
      Timer(30)
    }
  }

  // Restarts the game from the first level
  const restartfromFirstLevel = function () {
    setLevelStarted(false)
    setLevelContent("Are You Ready To Start?")
    setTypingIn("");
    clearInterval(intervalId)
    setCurrentLevel(0);
    setSeconds(30)
  }

  //Resuming from the last cleared level button
  const resumeFromLastClearedLevel = function () {
    setCurrentLevel(JSON.parse(localStorage.getItem("user_details"))?.highest_level_cleared);
    setLevelStarted(true)
    setTypingIn("");
    clearInterval(intervalId)
    setLevelContent(props.contents[currentLevel]?.content)
    setSeconds(30)
    Timer(30)
  }

  //Post request to attempts if both the text areas are the same
  useEffect(() => {
    if (typingIn === props.contents[currentLevel]?.content && typingIn !== "") {
      let correctWords = props.contents[currentLevel].content.split(' ').length;
      let secondsLeft = 30 - seconds;
      setLevelContent("Time for next level. Press the button below when you're ready to start")
      clearInterval(intervalId);
      setLevelStarted(false)
      setCurrentLevel(currentLevel + 1);
      setSeconds(30)
      setTypingIn("");
      axios.post('/attempts', {
        user_id: JSON.parse(localStorage.getItem("user_details"))?.id,
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

  const handleChange = (e) => {
    e.preventDefault();
  };

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
        <ProgressBar aria-valuemin="0" aria-valuemax="100" animated now={props.contents[currentLevel] ? (typingIn.length / props.contents[currentLevel].content.length) * 100 : 1} variant="success" />
        <br />
        <Card>
          <Card.Header>{seconds}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <div id="console-text">
                {currentLevel === 13? <GameCompleteMsg/> : levelContent || setLevelContent("Are You Ready To Start?")}
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
            // onChange={(event) => setTypingIn(event.target.value)}
            onChange={(event) => highlightWords(event)}
            value={typingIn}
            id="textarea"
            aria-label="With textarea"
            onCut={handleChange}
            onCopy={handleChange}
            onPaste={handleChange}
          />
        </InputGroup>
        <br />
        <p>
          {levelStarted === false && currentLevel !== 0 ?
            <Button variant="primary" onClick={restartfromFirstLevel}>
              Start from the begining
            </Button> : null}
          {levelStarted === false && currentLevel === 0 && JSON.parse(localStorage.getItem("user_details")) && currentLevel !== JSON.parse(localStorage.getItem("user_details"))?.highest_level_cleared ?
            <Button variant="primary" onClick={resumeFromLastClearedLevel} onclick='button.style.display = "none"'>
              Start from last cleared level
            </Button> : null}
          {levelStarted === true ?
            <Button variant="primary" onClick={resetLevel}>
              Restart Level
            </Button> : null}
          {levelStarted === false ?
            <Button
              variant="primary"
              onClick={startGame}
            >
              {levelStarted === true ? `Start Game ` : `Start Level ${currentLevel + 1}!`}
            </Button> : null}
            {/* {levelStarted === false ?
              <Button variant="primary" onClick={restartfromFirstLevel}>
              Go back to Level 1
            </Button> : null} */}
        </p>
      </Jumbotron>
    </div>
  )
}

export default GameConsole
