import React, { useState, useMemo } from 'react';
import { Container, Table, Alert, Button } from 'react-bootstrap';
import useApplicationData from "../hooks/useApplicationData";
import Moment from 'react-moment';
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';

function Attempts() {

  const soundUrl = "./sounds/SuperMarioBros.mp3";

  const [play] = useSound(soundUrl);

  const roundTo = require('round-to');

  const { attempts, setAttempts } = useApplicationData()

  const [sortType, setSortType] = useState('words_completed');

  const sortedAttempts = useMemo(() => {
    const sortArray = type => {
      const types = {
        wordsCompleted: 'words_completed',
        levels: 'level_id',
      };
      const sortProperty = types[type];
      const secondarySortProperty = types[type === 'levels' ? 'wordsCompleted' : 'levels']
      const sorted = [...attempts].sort((a, b) => {
        const initialDiff = b[sortProperty] - a[sortProperty]
        if (initialDiff === 0) {
          return b[secondarySortProperty] - a[secondarySortProperty]
        } else {
          return initialDiff;
        }
      });
      return sorted;
    };
    return sortArray(sortType).reverse()
  }, [attempts, sortType])

  const currentUser = (localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details"))?.id)

  const sortedUsersId = () => {
    let result = [];
    for (let i = 0; i < sortedAttempts.length; i++) {
      result.push(sortedAttempts[i].user_id)
    }
    return result
  }

  const currentUserAttempts = useMemo(() => {
    let result = []
    for (let attempt of sortedAttempts)
      if (attempt.user_id === currentUser && attempt.passed === true) {
        result.push(attempt)
      }
    return result
  })

  console.log(currentUserAttempts)

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
              {currentUserAttempts[0] ? (
                <tr>
                <td>
                  <Moment format='MMMM Do, YYYY'>
                    {currentUserAttempts[0] && currentUserAttempts[0].attempted_at}
                  </Moment>
                </td>
                <td>{currentUserAttempts[0] && currentUserAttempts[0].level_id}</td>
                <td>{currentUserAttempts[0] && currentUserAttempts[0].time_taken + " Seconds"}</td>
                <td>{roundTo((currentUserAttempts[0] && currentUserAttempts[0].words_completed) * 60 / (currentUserAttempts[0] && currentUserAttempts[0].time_taken), 2)}</td>
              </tr>) : null
              }
              {currentUserAttempts[1] ? (              
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {currentUserAttempts[1] && currentUserAttempts[1].attempted_at}
                  </Moment>
                </td>
                <td>{currentUserAttempts[1] && currentUserAttempts[1].level_id}</td>
                <td>{currentUserAttempts[1] && currentUserAttempts[1].time_taken + " Seconds"}</td>
                <td>{roundTo((currentUserAttempts[1] && currentUserAttempts[1].words_completed) * 60 / (currentUserAttempts[1] && currentUserAttempts[1].time_taken), 2)}</td>
              </tr>) : null
              }
              {currentUserAttempts[2] ? (
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {currentUserAttempts[2] && currentUserAttempts[2].attempted_at}
                  </Moment>
                </td>
                <td>{currentUserAttempts[2] && currentUserAttempts[2].level_id}</td>
                <td>{currentUserAttempts[2] && currentUserAttempts[2].time_taken + " Seconds"}</td>
                <td>{roundTo((currentUserAttempts[2] && currentUserAttempts[2].words_completed) * 60 / (currentUserAttempts[2] && currentUserAttempts[2].time_taken), 2)}</td>
              </tr>) : null
              }
              {currentUserAttempts[3] ? (
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {currentUserAttempts[3] && currentUserAttempts[3].attempted_at}
                  </Moment>
                </td>
                <td>{currentUserAttempts[3] && currentUserAttempts[3].level_id}</td>
                <td>{currentUserAttempts[3] && currentUserAttempts[3].time_taken + " Seconds"}</td>
                <td>{roundTo((currentUserAttempts[3] && currentUserAttempts[3].words_completed) * 60 / (currentUserAttempts[3] && currentUserAttempts[3].time_taken), 2)}</td>
              </tr>) : null
              }
              {currentUserAttempts[4] ? (
              <tr>
                <td>
                  <Moment format="MMMM Do, YYYY">
                    {currentUserAttempts[4] && currentUserAttempts[4].attempted_at}
                  </Moment>
                </td>
                <td>{currentUserAttempts[4] && currentUserAttempts[4].level_id}</td>
                <td>{currentUserAttempts[4] && currentUserAttempts[4].time_taken + " Seconds"}</td>
                <td>{roundTo((currentUserAttempts[4] && currentUserAttempts[4].words_completed) * 60 / (currentUserAttempts[4] && currentUserAttempts[4].time_taken), 2)}</td>
              </tr>) : null
              }

            </tbody>
          </Table>
          <Alert variant="success">
        <Alert.Heading>Hey, nice to see you!</Alert.Heading>
        <p>
          Congrats on the rad scores! Looks like you're doing quite well but don't let that stop you. Click on the button below to try and reach even better scores!
        </p>
        <hr />
        <p className="mb-0">
          <DelayLink delay={3000} to="/play" clickAction={play} replace={false}>
            <Button variant="primary" size="lg">Play Game</Button>
          </DelayLink>
        </p>
      </Alert>
        </Container>
      </div>
    )
  } else {
    return (
      <Alert variant="danger">
        <Alert.Heading>Hey, nice to see you!</Alert.Heading>
        <p>
          Aww yeah, so it looks like you haven't actually played yet. No worries! Simply click on the button below to play this super awesome game and build up your typing chops!
        </p>
        <hr />
        <p className="mb-0">
          <DelayLink delay={3000} to="/play" clickAction={play} replace={false}>
            <Button variant="primary" size="lg">Play Game</Button>
          </DelayLink>
        </p>
      </Alert>
    )
  }
}

export default Attempts
