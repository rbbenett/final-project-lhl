import React, { useState, useEffect, useMemo } from 'react'
import {Container, Table} from 'react-bootstrap';
import useApplicationData from "../hooks/useApplicationData"
import "./Leaderboard.css"

function Leaderboard(props) {
  
  const { users, setUsers } = useApplicationData()

  const [sortType, setSortType] = useState('levels');

  const sortedUsers = useMemo(() => {
    const sortArray = type => {
      const types = {
        wordsPerMin: 'words_per_min',
        levels: 'highest_level_cleared',
      };
      const sortProperty = types[type];
      const secondarySortProperty = types[type === 'levels' ? 'wordsPerMin' : 'levels']
      const sorted = [...users].sort((a, b) => {
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
  }, [users, sortType])



  return (
    <div className="leaderboard">
      <Container className="leadercontainer">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan="4" classname="align-me">Leaderboard</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Highest Level Reached</th>
            <th>WPM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{sortedUsers[0] && sortedUsers[0].username}</td>
            <td>{sortedUsers[0] && sortedUsers[0].highest_level_cleared}</td>
            <td>{sortedUsers[0] && sortedUsers[0].words_per_min}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{sortedUsers[1] && sortedUsers[1].username}</td>
            <td>{sortedUsers[1] && sortedUsers[1].highest_level_cleared}</td>
            <td>{sortedUsers[1] && sortedUsers[1].words_per_min}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{sortedUsers[2] && sortedUsers[2].username}</td>
            <td>{sortedUsers[2] && sortedUsers[2].highest_level_cleared}</td>
            <td>{sortedUsers[2] && sortedUsers[2].words_per_min}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{sortedUsers[3] && sortedUsers[3].username}</td>
            <td>{sortedUsers[3] && sortedUsers[3].highest_level_cleared}</td>
            <td>{sortedUsers[3] && sortedUsers[3].words_per_min}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{sortedUsers[4] && sortedUsers[4].username}</td>
            <td>{sortedUsers[4] && sortedUsers[4].highest_level_cleared}</td>
            <td>{sortedUsers[4] && sortedUsers[4].words_per_min}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{sortedUsers[5] && sortedUsers[5].username}</td>
            <td>{sortedUsers[5] && sortedUsers[5].highest_level_cleared}</td>
            <td>{sortedUsers[5] && sortedUsers[5].words_per_min}</td>
          </tr>
          {/* <tr>
            <td>7</td>
            <td>{sortedUsers[6].username}</td>
            <td>{sortedUsers[6].highest_level_cleared}</td>
            <td>{sortedUsers[6].words_per_min}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{sortedUsers[7].username}</td>
            <td>{sortedUsers[7].highest_level_cleared}</td>
            <td>{sortedUsers[7].words_per_min}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{sortedUsers[8].username}</td>
            <td>{sortedUsers[8].highest_level_cleared}</td>
            <td>{sortedUsers[8].words_per_min}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>{sortedUsers[9].username}</td>
            <td>{sortedUsers[9].highest_level_cleared}</td>
            <td>{sortedUsers[9].words_per_min}</td>
          </tr> */}
        </tbody>
      </Table>
      </Container>
    </div>
  )
}

export default Leaderboard
