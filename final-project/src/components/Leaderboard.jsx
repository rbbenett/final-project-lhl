import React from 'react'
import {Container, Table} from 'react-bootstrap';

function Leaderboard() {
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
            <td>MarkTwain</td>
            <td>9</td>
            <td>101</td>
          </tr>
          <tr>
            <td>2</td>
            <td>JacobsLadder</td>
            <td>9</td>
            <td>100</td>
          </tr>
          <tr>
            <td>3</td>
            <td>LarrytheBird</td>
            <td>5</td>
            <td>90</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </div>
  )
}

export default Leaderboard
