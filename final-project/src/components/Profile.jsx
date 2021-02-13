import React from 'react';
import { Container, Row, Col, Image, Card, Button, ProgressBar } from 'react-bootstrap';
import "./Profile.css"

function Profile() {
  return (
    <div className="profile">
      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/sample-avatar.jpg" className="avatar" />
        <Card.Body>
          <Card.Title>Bobby Bob</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">bobthebuilder99</Card.Subtitle>
          <ProgressBar animated now={70} label="70%" />
          {/* <Card.Text><i class="fas fa-certificate"></i> Veteran</Card.Text> */}
          <Card.Text>
            <br/>
            <Card.Img variant="top" src="images/medal-icon.png" className= "medal-icon" />
             Veteran
          </Card.Text>
          <Card.Text>Highest Level Completed: 4</Card.Text>
          <Card.Text>Average WPM: 97</Card.Text>
          <Button variant="primary">Global Leaderboard</Button>
        </Card.Body>
        {/* <Card.Body>This is some text within a card body.</Card.Body> */}
    </Card>
    </div>
  )
}

export default Profile
