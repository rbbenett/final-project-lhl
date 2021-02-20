import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import Attempts from "./Attempts";
import "./Profile.css";
import axios from "axios";

function Profile() {

  const [wpm, setWpm] = useState(0);
  const [highest, setHighest] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3004/api/users", {
    })
      .then(res => {
        for (let user of res.data['users']) {
          if (user.id === JSON.parse(localStorage.getItem("user_details")).id) {
            setWpm(user.words_per_min)
            setHighest(user.highest_level_cleared)
          }
        }
      })
  }, [])

  const roundTo = require('round-to');

  const userGameStatus = (((localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).highest_level_cleared) / 12) * 100)

  const userAvatar = (localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).avatar)

  return (
    <div className="profile">
      <Container>
        <Row>
          <Col>
            <Card border="secondary" style={{ width: '18rem' }}>
              {userAvatar === "Dinosaur" ?
              <Card.Img variant="top" src="images/dinosaur.png" className="avatar" />
              : userAvatar === "Ghost" ?
              <Card.Img variant="top" src="images/ghost.png" className="avatar" />
              : userAvatar === "Monster" ?
              <Card.Img variant="top" src="images/monster.png" className="avatar" />
              : userAvatar === "Unicorn" ?
              <Card.Img variant="top" src="images/unicorn.png" className="avatar" />
              : userAvatar === "Fox" ?
              <Card.Img variant="top" src="images/fox.png" className="avatar" />
              :
              <Card.Img variant="top" src="images/sample-avatar.jpg" className="avatar" />
              }
              <Card.Body>
                <Card.Title className="profileName">{localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).first_name} {localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).last_name}</Card.Title>
                <Card.Subtitle className="profileUserName text-muted">@{localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).username}</Card.Subtitle>
                <ProgressBar animated aria-valuemin="0" aria-valuemax="100" now={highest * 8.4} label={roundTo(highest * 8.4, 0) + "%"} />
                {userGameStatus == 100 ?
                  <Card.Text className="medalCard">
                    <br />
                    <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                    <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                    <Card.Img className="medal-icon" variant="top" src="images/2medal.png" className="medal-icon" />
                    <Card.Img className="medal-icon" variant="top" src="images/1medal.png" className="medal-icon" />
                    <Card.Img className="medal-icon" variant="top" src="images/3startrophy.png" className="medal-icon" />
                    <br />
                    <strong className="progressTitle">Master</strong>
                  </Card.Text>
                  : userGameStatus > 75 ?
                    <Card.Text className="medalCard">
                      <br />
                      <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                      <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                      <Card.Img className="medal-icon" variant="top" src="images/2medal.png" className="medal-icon" />
                      <Card.Img className="medal-icon" variant="top" src="images/1medal.png" className="medal-icon" />
                      <br />
                      <strong className="progressTitle">Veteran</strong>
                    </Card.Text>
                    : userGameStatus > 50 ?
                      <Card.Text className="medalCard">
                        <br />
                        <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                        <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                        <Card.Img className="medal-icon" variant="top" src="images/2medal.png" className="medal-icon" />
                        <br />
                        <strong className="progressTitle">Experienced</strong>
                      </Card.Text>
                      : userGameStatus > 25 ?
                        <Card.Text className="medalCard">
                          <br />
                          <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                          <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                          <br />
                          <strong className="progressTitle">Seasoned</strong>
                        </Card.Text>
                        : userGameStatus > 1 ?
                        <Card.Text className="medalCard">
                          <br />
                          <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                          <br />
                          <strong className="progressTitle">Rookie</strong>
                        </Card.Text>
                        : 
                        <Card.Text className="medalCard">
                          <br />
                          <Card.Img className="medal-icon" variant="top" src="images/new.png" className="medal-icon" />
                          <br />
                          <strong className="progressTitle">Newbie</strong>
                        </Card.Text>
                }
                <Card.Text>Highest Level Completed {highest + "/12"}</Card.Text>
                <Card.Text>Average WPM: {wpm}</Card.Text>
                <Button className="leaderboardButton" variant="primary" href="/leaderboard">Global Leaderboard</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row>
              <Card style={{ width: '45rem' }} >
                <Card.Header as="h5">🔥Your Top Typing Speeds🔥</Card.Header>
                <Card.Body style={{ paddingBottom: '13px', paddingTop: '13px' }}>
                  <Attempts />
                </Card.Body>
              </Card>
            </Row>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
