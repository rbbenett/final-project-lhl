import React, { useState, useMemo } from 'react';
import { Container, Table, Alert, Button } from 'react-bootstrap';
import useApplicationData from "../hooks/useApplicationData";
import Moment from 'react-moment';
import useSound from 'use-sound';
import DelayLink from 'react-delay-link';

function Attempts() {

  const soundUrl = "./sounds/roll.mp3";

  const [play] = useSound(soundUrl);

  const roundTo = require('round-to');

  const { attempts, setAttempts } = useApplicationData()

  const [sortType, setSortType] = useState('levels');

  const sortedAttempts = useMemo(() => {
    const sortArray = type => {
      const types = {
        wordsPerMin: 'words_completed',
        levels: 'level_id',
      };
      const sortProperty = types[type];
      const secondarySortProperty = types[type === 'levels' ? 'wordsPerMin' : 'levels']
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
    return sortArray(sortType)
  }, [attempts, sortType])

  const currentUser = (localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details"))?.id)

  const sortedUsersId = () => {
    let result = [];
    for (let i = 0; i < sortedAttempts.length; i++) {
      result.push(sortedAttempts[i].user_id)
    }
    return result
  }

  const currentUserArray = useMemo(() => {
    let result = []
    for (let attempt of sortedAttempts)
      if (attempt.user_id === currentUser && attempt.passed === true) {
        result.push(attempt)
      }
    return result
  })

  console.log(currentUserArray[0])

  if (sortedUsersId().includes(currentUser)) {
    return (
      <div className="leaderboard">
        <Container className="leadercontainer">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Attempted At</th>
                <th>Level</th>
                <th>Words Per Minute</th>
                <th>Time Taken</th>
              </tr>
            </thead>
            <tbody>
              {currentUserArray[0] ? (
                <tr>
                  <td>
                    <Moment format='MMMM Do YYYY'>
                      {currentUserArray[0] && currentUserArray[0].attempted_at}
                    </Moment>
                  </td>
                  <td>{currentUserArray[0] && currentUserArray[0].level_id}</td>
                  <td>{roundTo((currentUserArray[0] && currentUserArray[0].words_completed) * 60 / (currentUserArray[0] && currentUserArray[0].time_taken), 2)}</td>
                  <td>{currentUserArray[0] && currentUserArray[0].time_taken}</td>
                </tr>) : null
              }
              {currentUserArray[1] ? (
                <tr>
                  <td>
                    <Moment format="MMMM Do YYYY">
                      {currentUserArray[1] && currentUserArray[1].attempted_at}
                    </Moment>
                  </td>
                  <td>{currentUserArray[1] && currentUserArray[1].level_id}</td>
                  <td>{roundTo((currentUserArray[1] && currentUserArray[1].words_completed) * 60 / (currentUserArray[1] && currentUserArray[1].time_taken), 2)}</td>
                  <td>{currentUserArray[1] && currentUserArray[1].time_taken}</td>
                </tr>) : null
              }
              {currentUserArray[2] ? (
                <tr>
                  <td>
                    <Moment format="MMMM Do YYYY">
                      {currentUserArray[2] && currentUserArray[2].attempted_at}
                    </Moment>
                  </td>
                  <td>{currentUserArray[2] && currentUserArray[2].level_id}</td>
                  <td>{roundTo((currentUserArray[2] && currentUserArray[2].words_completed) * 60 / (currentUserArray[2] && currentUserArray[2].time_taken), 2)}</td>
                  <td>{currentUserArray[2] && currentUserArray[2].time_taken}</td>
                </tr>) : null
              }
              {currentUserArray[3] ? (
                <tr>
                  <td>
                    <Moment format="MMMM Do YYYY">
                      {currentUserArray[3] && currentUserArray[3].attempted_at}
                    </Moment>
                  </td>
                  <td>{currentUserArray[3] && currentUserArray[3].level_id}</td>
                  <td>{roundTo((currentUserArray[3] && currentUserArray[3].words_completed) * 60 / (currentUserArray[3] && currentUserArray[3].time_taken), 2)}</td>
                  <td>{currentUserArray[3] && currentUserArray[3].time_taken}</td>
                </tr>) : null
              }
              {currentUserArray[4] ? (
                <tr>
                  <td>
                    <Moment format="MMMM Do YYYY">
                      {currentUserArray[4] && currentUserArray[4].attempted_at}
                    </Moment>
                  </td>
                  <td>{currentUserArray[4] && currentUserArray[4].level_id}</td>
                  <td>{roundTo((currentUserArray[4] && currentUserArray[4].words_completed) * 60 / (currentUserArray[4] && currentUserArray[4].time_taken), 2)}</td>
                  <td>{currentUserArray[4] && currentUserArray[4].time_taken}</td>
                </tr>) : null
              }

            </tbody>
          </Table>
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
