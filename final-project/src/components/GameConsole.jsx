import React from 'react';
import { useState, useEffect } from 'react';
import "./GameConsole.css"
// import Countdown from "react-countdown";
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl } from 'react-bootstrap';


function GameConsole() {

  const Timer = function() {
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        clearInterval(myInterval)
        return Completionist
      }  }, 1000)
    });

    return (
    <div>
      { seconds === 0 ? null : <h1> {seconds < 10 ?  `0${seconds}` : seconds}</h1> }
    </div>
  )
}
  const Completionist = () => <span>GameOver</span>;

  // Renderer callback with condition
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      postToAttempts(user_id, level_id, content.length, 30, false)
    } else {
      // Render a countdown
      return (
        <span id="countdown">
          {seconds}
        </span>
      );
    }
  };

  const checkingForMatch = function(textarea, content) {
  if (document.getElementById('textarea').value === content){
    const timerValue = document.getElementById('countdown').value
    .then(
      postToAttempts(user_id, level_id, content.length, timerValue, true)
    )
    .then(//pull data from the database about what level you're on then render the gameplay
      whatLevelWeAreOn(user_id)
      )
    }
  }

  const whatLevelWeAreOn = function(user_id){
    return pool.query(`
    SELECT * FROM attempts
    WHERE user_id = $1 AND passed = true
    ORDER BY level_id DESC, 
    LIMIT 1
    `, [user_id])
  .then(res => res.rows[0]);
  }

  const postToAttempts = function(userId, levelId, wordsCompleted, secondsOnTimer, passOrFail){
    return pool.query(`
    INSERT INTO attempts (user_id, level_id, words_completed, time_taken, passed)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;`, [userId, levelId, wordsCompleted, secondsOnTimer, passOrFail])
  }

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
        <br/><br/><br/>
        <ProgressBar animated now={45} variant="success" />
        <br/>
        <p>
        Wrinkles everywhere, who was that woman looking back at me from the bathroom mirror? Don’t recognise the face and I haven’t got grey hair, well except for maybe the odd one or two. Is that laughter lines or even more wrinkles? Oh look the start of a moustache, nah that’s got to be somebody else. I’m in the wrong bathroom!
        </p>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text onKeyUp="checkingforMatch()" >TYPE HERE:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br/>
        <p>
          <Button variant="primary">Resume from Level X</Button>
          <Button variant="primary">Start Game!</Button>
        </p>
      </Jumbotron>
      
    </div>
  )
}

export default GameConsole
