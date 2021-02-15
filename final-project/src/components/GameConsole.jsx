import React, { useState, setState, useEffect } from 'react';
import "./GameConsole.css"
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl, Card } from 'react-bootstrap';
import axios from 'axios';
import useApplicationData from "../hooks/useApplicationData"


//   const Timer = function() {
//     const [seconds, setSeconds ] =  useState(0);
//     useEffect(()=>{
//     let myInterval = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       } else if (seconds === 0) {
//         clearInterval(myInterval)
//         return Completionist
//       }  }, 1000)
//     });

//     return (
//     <div>
//       { seconds === 0 ? null : <h1> {seconds < 10 ?  `0${seconds}` : seconds}</h1> }
//     </div>
//   )
// }
//   const Completionist = () => <span>GameOver</span>;

//   // Renderer callback with condition
//   const renderer = ({ seconds, completed }) => {
//     if (completed) {
//       postToAttempts(user_id, level_id, content.length, 30, false)
//     } else {
//       // Render a countdown
//       return (
//         <span id="countdown">
//           {seconds}
//         </span>
//       );
//     }
//   };

//   const checkingForMatch = function(textarea, content) {
//   if (document.getElementById('textarea').value === content){
//     const timerValue = document.getElementById('countdown').value
//     .then(
//       postToAttempts(user_id, level_id, content.length, timerValue, true)
//     )
//     .then(//pull data from the database about what level you're on then render the gameplay
//       whatLevelWeAreOn(user_id)
//       )
//     }
//   }

//   const whatLevelWeAreOn = function(user_id){
//     return pool.query(`
//     SELECT * FROM attempts
//     WHERE user_id = $1 AND passed = true
//     ORDER BY level_id DESC, 
//     LIMIT 1
//     `, [user_id])
//   .then(res => res.rows[0]);
//   }

//   const postToAttempts = function(userId, levelId, wordsCompleted, secondsOnTimer, passOrFail){
//     return pool.query(`
//     INSERT INTO attempts (user_id, level_id, words_completed, time_taken, passed)
//     VALUES($1, $2, $3, $4, $5)
//     RETURNING *;`, [userId, levelId, wordsCompleted, secondsOnTimer, passOrFail])
//   }
function GameConsole(props) {

  console.log(props.contents[0]);

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
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                "HELLO"
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br/>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text onKeyUp="checkingforMatch()" >TYPE HERE:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br/>
        <p>
          <Button variant="primary">
            Resume from Level X
          </Button>
          <Button 
            variant="primary"
            onClick={props.loadLevelOne}
          >
            Start Game!
          </Button>
        </p>
      </Jumbotron>
      
    </div>
  )
}

export default GameConsole
