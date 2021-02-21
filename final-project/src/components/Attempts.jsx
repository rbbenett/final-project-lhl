import React, { useState, useMemo } from 'react';
import { Container, Table, Alert, Button } from 'react-bootstrap';
import useApplicationData from "../hooks/useApplicationData";
import Moment from 'react-moment';
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';
import { useHistory } from 'react-router-dom';
import "./Attempts.css";

export default function Attempts() {

  const soundUrl = "./sounds/SuperMarioBros.mp3";

  const [play] = useSound(soundUrl);

  const history = useHistory();
  const navigateToPlay = () => {
    history.push("/play");
    history.go(0)
  }
  
  const roundTo = require('round-to');

  const { attempts, setAttempts } = useApplicationData()

  for (const attempt of attempts) {
    attempt.words_per_min=((attempt.words_completed * 60) / attempt.time_taken)
  }

  const currentUser = (localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details"))?.id)

  const sortedUsersId = () => {
    let result = [];
    for (let i = 0; i < attempts.length; i++) {
      result.push(attempts[i].user_id)
    }
    return result
  }

  const currentUserAttempts = useMemo(() => {
    let result = []
    for (let attempt of attempts)
      if (attempt.user_id === currentUser && attempt.passed === true) {
        result.push(attempt)
      }
    return result
  })

  const sortUserAttempts = currentUserAttempts.sort((a, b) => {
    return b.words_per_min - a.words_per_min
  })

  if (sortedUsersId().includes(currentUser)) {
    return (
      <div className="leaderboard">
        <Container className="leadercontainer">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Level</th>
                <th>Time Completed</th>
                <th>Words Per Minute</th>
              </tr>
            </thead>
            <tbody>
              {sortUserAttempts[0] ? (
                <tr>
                <td>
                  <Moment format='MMMM Do, YYYY'>
                    {sortUserAttempts[0] && sortUserAttempts[0].attempted_at}
                  </Moment>
                </td>
                <td>{sortUserAttempts[0] && sortUserAttempts[0].level_id}</td>
                <td>{sortUserAttempts[0] && sortUserAttempts[0].time_taken + " Seconds"}</td>
                <td>{roundTo((sortUserAttempts[0] && sortUserAttempts[0].words_per_min), 2)}</td>
              </tr>) : null
              }
              {sortUserAttempts[1] ? (              
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {sortUserAttempts[1] && sortUserAttempts[1].attempted_at}
                  </Moment>
                </td>
                <td>{sortUserAttempts[1] && sortUserAttempts[1].level_id}</td>
                <td>{sortUserAttempts[1] && sortUserAttempts[1].time_taken + " Seconds"}</td>
                <td>{roundTo((sortUserAttempts[1] && sortUserAttempts[1].words_per_min), 2)}</td>
              </tr>) : null
              }
              {sortUserAttempts[2] ? (
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {sortUserAttempts[2] && sortUserAttempts[2].attempted_at}
                  </Moment>
                </td>
                <td>{sortUserAttempts[2] && sortUserAttempts[2].level_id}</td>
                <td>{sortUserAttempts[2] && sortUserAttempts[2].time_taken + " Seconds"}</td>
                <td>{roundTo((sortUserAttempts[2] && sortUserAttempts[2].words_per_min), 2)}</td>
              </tr>) : null
              }
              {sortUserAttempts[3] ? (
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {sortUserAttempts[3] && sortUserAttempts[3].attempted_at}
                  </Moment>
                </td>
                <td>{sortUserAttempts[3] && sortUserAttempts[3].level_id}</td>
                <td>{sortUserAttempts[3] && sortUserAttempts[3].time_taken + " Seconds"}</td>
                <td>{roundTo((sortUserAttempts[3] && sortUserAttempts[3].words_per_min), 2)}</td>
              </tr>) : null
              }
              {sortUserAttempts[4] ? (
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {sortUserAttempts[4] && sortUserAttempts[4].attempted_at}
                  </Moment>
                </td>
                <td>{sortUserAttempts[4] && sortUserAttempts[4].level_id}</td>
                <td>{sortUserAttempts[4] && sortUserAttempts[4].time_taken + " Seconds"}</td>
                <td>{roundTo((sortUserAttempts[4] && sortUserAttempts[4].words_per_min), 2)}</td>
              </tr>) : null
              }

            </tbody>
          </Table>
          <Alert className="alertContainer" >
        <Alert.Heading>Hey, nice to see you again!</Alert.Heading>
        <p>
          Congrats on the rad scores! Looks like you're doing quite well but don't let that stop you. Click on the button below to try and reach even better scores!
        </p>
        <hr />
        <p className="mb-0">
          <DelayLink delay={1000} to="/play" clickAction={navigateToPlay} replace={false}>
            <Button className="alertButton" variant="outline" size="lg">Play Game</Button>
          </DelayLink>
        </p>
      </Alert>
        </Container>
      </div>
    )
  } else {
    return (
      <Alert className="alertContainer">
        <Alert.Heading>Hey, you must be new here!</Alert.Heading>
        <p>
          Aww yeah, so it looks like you haven't actually played yet. No worries! Simply click on the button below to play this super awesome game and build up your typing chops!
        </p>
        <hr />
        <p className="mb-0">
          <DelayLink delay={3000} to="/play" clickAction={play} replace={false}>
            <Button className="alertButton" variant="outline" size="lg">Play Game</Button>
          </DelayLink>
        </p>
      </Alert>
    )
  }
}
