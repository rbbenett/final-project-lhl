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

  const Timer = function (seconds){
    setLevelStarted(true)
    setSeconds(seconds)
    if (seconds > 0) {
      setIntervalId(setInterval(() => setSeconds((s) => s-1), 1000))
    } else {
      setSeconds("Game Over");
    }
  }

  console.log(JSON.parse(localStorage.getItem("user_details")).highest_level_cleared)

  const highlightWords = (event) => {
    let value = event.target.value;
    let txt = document.getElementById("console-text").innerText;
    let idx = txt.indexOf(value);
    if(idx >= 0) {
      let newText = [txt.substring(0, idx), <strong>{txt.substring(idx, idx + value.length)}</strong>, txt.substring(idx + value.length)];
      setTypingIn(value);
      setLevelContent(newText);
    } else {
      setLevelContent(levelContent);
      setTypingIn(value);
    }    
  }

  // useEffect(() => {
  //   for (let i = 0; i < typingIn.length; i++){
  //     if(levelContent[typingIn.length - 1] !== typingIn[typingIn.length - 1]) { 

  //       levelContent.replace(levelContent[typingIn.length - 1] ,<span>hello</span>)
  //       return
  //     }
  //   }
  // },[typingIn])

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
    setLevelStarted(false)
    setLevelContent("Are you Ready to start")
    setTypingIn("");
    clearInterval(intervalId)
    setCurrentLevel(currentLevel);
    setSeconds(30)
  }

  useEffect(() => {
    if(seconds === 0){
      setSeconds("Game Over")
      let currentLevelWords = props.contents[currentLevel].content.split(' ')
      let totalOfCorrectWords = totalWordsCorrect(typingIn, currentLevelWords)
      clearInterval(intervalId)
      axios.post('/attempts', {
        user_id: JSON.parse(localStorage.getItem("user_details")).id,
        level_id: currentLevel + 1,
        words_completed: totalOfCorrectWords,
        time_taken: 30,
        passed: false
    })
    .catch(error => (console.log(error)))
    }
  },[seconds, intervalId]);

  const startGame = function() {
    setLevelStarted(true)
    if(currentLevel === 0){
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

  const restartfromFirstLevel = function() {
    setLevelStarted(false)
    setLevelContent("Are you Ready to start")
    setTypingIn("");
    clearInterval(intervalId)
    setCurrentLevel(0);
    setSeconds(30)
  }

  const resumeFromLastClearedLevel = function () {
    setLevelStarted(true)
    setTypingIn("");
    clearInterval(intervalId)
    setCurrentLevel(JSON.parse(localStorage.getItem("user_details")).highest_level_cleared);
    setLevelContent(props.contents[currentLevel]?.content)
    setSeconds(30)
    Timer(30)
  }

  //Post request to attempts if both the text areas are the same
  useEffect(() => {
    if(typingIn === props.contents[currentLevel]?.content && typingIn !== "") {
      let correctWords = props.contents[currentLevel].content.split(' ').length;
      let secondsLeft = 30 - seconds;
      setLevelContent("Time for next level. Press the button below when you're ready to start")
      clearInterval(intervalId);
      setCurrentLevel(currentLevel + 1);
      setSeconds(30)
      setTypingIn("");
      axios.post('/attempts', {
        user_id: JSON.parse(localStorage.getItem("user_details")).id,
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
        <ProgressBar aria-valuemin="0" aria-valuemax="100" animated now={props.contents[currentLevel] ? (typingIn.length/props.contents[currentLevel].content.length) * 100 : 1} variant="success" />
        <br />
        <Card>
          <Card.Header>{seconds}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <div id="console-text">
                {levelContent || setLevelContent("Are you Ready to start")}
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
          {levelStarted === false && currentLevel !== 0? 
            <Button variant="primary" onClick={restartfromFirstLevel}>
              Start from the begining
            </Button> : null}
          {levelStarted === false && currentLevel !== JSON.parse(localStorage.getItem("user_details")).highest_level_cleared? 
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
            {levelStarted === true ? `Start Game ` : `Start Level ${currentLevel+1}!`}
            </Button> : null ||
            <Button variant="primary" onClick={restartfromFirstLevel}>
            Go back to Level 1
            </Button>}
        </p>
      </Jumbotron>
    </div>
  )
}

export default GameConsole
