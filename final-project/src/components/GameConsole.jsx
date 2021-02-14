import React from 'react';
import "./GameConsole.css"
import Countdown from "react-countdown";
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl } from 'react-bootstrap';


function GameConsole() {

  const Completionist = () => <span>GameOver</span>;

// Renderer callback with condition
const renderer = ({ seconds, completed }) => {
  if (completed) {
    postToAttempts(user_id, level_id, paragraph.length, 30, false)
    // Render a complete state
      .then( render (<Completionist />)
        )
    
  } else {
    // Render a countdown
    return (
      <span id="countdown">
        {seconds}
      </span>
    );
  }
};

ReactDOM.render(
  <Countdown date={Date.now() + 30000} renderer={renderer} />,
);

  const checkingForMatch = function(textarea, paragraph) {
  if (document.getElementById('textarea').value === paragraph){
    stop()
    const timerValue = document.getElementById('countdown').value
    .then(
      postToAttempts(user_id, level_id, paragraph.length, timerValue, true)
    )
    .then(//pull data from the database about what level you're on then render the gameplay
      )
    }
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
