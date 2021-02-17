import React, { useState, useMemo } from 'react';
import {Container, Table} from 'react-bootstrap';
import useApplicationData from "../hooks/useApplicationData";
import Moment from 'react-moment';
import "./Leaderboard.css"

function Attempts() {
  
  const { attempts, setAttempts } = useApplicationData()

  const [sortType, setSortType] = useState('levels');

  const sortedAttempts = useMemo(() => {
    const sortArray = type => {
      const types = {
        timeAttempted: 'attempted_at',
        wordsCompleted: 'words_completed',
        timeTaken: 'time_taken',
        passed: 'passed'
      };
      const sortProperty = types[type];
      const sorted = [...attempts].sort((a, b) => {
         return b[sortProperty] - a[sortProperty]
      });
      return sorted;
    };
    return sortArray(sortType)
  }, [attempts, sortType])

  return (
    <div className="leaderboard">
      <Container className="leadercontainer">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan="4" classname="align-me">Previous Attempts</th>
          </tr>
          <tr>
            <th>Attempted At</th>
            <th>Words Completed</th>
            <th>Time Taken</th>
            <th>Passed?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[0] && sortedAttempts[0].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[0] && sortedAttempts[0].words_completed}</td>
            <td>{sortedAttempts[0] && sortedAttempts[0].time_taken}</td>
            <td>{sortedAttempts[0] && sortedAttempts[0].passed.toString().toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[1] && sortedAttempts[1].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[1] && sortedAttempts[1].words_completed}</td>
            <td>{sortedAttempts[1] && sortedAttempts[1].time_taken}</td>
            <td>{sortedAttempts[1] && sortedAttempts[1].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[2] && sortedAttempts[2].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[2] && sortedAttempts[2].words_completed}</td>
            <td>{sortedAttempts[2] && sortedAttempts[2].time_taken}</td>
            <td>{sortedAttempts[2] && sortedAttempts[2].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[3] && sortedAttempts[3].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[3] && sortedAttempts[3].words_completed}</td>
            <td>{sortedAttempts[3] && sortedAttempts[3].time_taken}</td>
            <td>{sortedAttempts[3] && sortedAttempts[3].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[4] && sortedAttempts[4].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[4] && sortedAttempts[4].words_completed}</td>
            <td>{sortedAttempts[4] && sortedAttempts[4].time_taken}</td>
            <td>{sortedAttempts[4] && sortedAttempts[4].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[5] && sortedAttempts[5].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[5] && sortedAttempts[5].words_completed}</td>
            <td>{sortedAttempts[5] && sortedAttempts[5].time_taken}</td>
            <td>{sortedAttempts[5] && sortedAttempts[5].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[6] && sortedAttempts[6].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[6] && sortedAttempts[6].words_completed}</td>
            <td>{sortedAttempts[6] && sortedAttempts[6].time_taken}</td>
            <td>{sortedAttempts[6] && sortedAttempts[6].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[7] && sortedAttempts[7].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[7] && sortedAttempts[7].words_completed}</td>
            <td>{sortedAttempts[7] && sortedAttempts[7].time_taken}</td>
            <td>{sortedAttempts[7] && sortedAttempts[7].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[8] && sortedAttempts[8].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[8] && sortedAttempts[8].words_completed}</td>
            <td>{sortedAttempts[8] && sortedAttempts[8].time_taken}</td>
            <td>{sortedAttempts[8] && sortedAttempts[8].passed.toString()}</td>
          </tr>
          <tr>
          <td>
              <Moment format="YYYY/MM/DD">
              {sortedAttempts[9] && sortedAttempts[9].attempted_at}
              </Moment>
            </td>
            <td>{sortedAttempts[9] && sortedAttempts[9].words_completed}</td>
            <td>{sortedAttempts[9] && sortedAttempts[9].time_taken}</td>
            <td>{sortedAttempts[9] && sortedAttempts[9].passed.toString()}</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </div>
  )
}

export default Attempts
