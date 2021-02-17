import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Modal } from 'react-bootstrap';
import EditUser from './EditUser';
import EditPassword from './EditPassword';
import Attempts from "./Attempts";
import "./Profile.css";

function Profile() {
  const [showEditUser, setShowEditUser] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);

  const handleCloseEditUser = () => setShowEditUser(false);
  const handleShowEditUser = () => setShowEditUser(true);
  const handleCloseEditPassword = () => setShowEditPassword(false);
  const handleShowEditPassword = () => setShowEditPassword(true);


  return (
    <div className="profile">
      <Container>
        <Row>
          <Col>
            <Card border="secondary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/sample-avatar.jpg" className="avatar" />
              <Card.Body>
                <Card.Title>{localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).first_name} {localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).last_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@{localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).username}</Card.Subtitle>
                <ProgressBar animated now={(localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).highest_level_cleared) * 10} label={((localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).highest_level_cleared) * 10) + "%"} />
                {/* <Card.Text><i class="fas fa-certificate"></i> Veteran</Card.Text> */}
                <Card.Text>
                  <br />
                  <Card.Img variant="top" src="images/medal-icon.png" className="medal-icon" />
                  Veteran
                </Card.Text>
                <Card.Text>Highest Level Completed: {localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).highest_level_cleared}</Card.Text>
                <Card.Text>Average WPM: {localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).words_per_min}</Card.Text>
                <Button variant="primary" href="/leaderboard">Global Leaderboard</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row>
              <Card style={{ width: '45rem' }} >
                <Card.Header as="h5">Previous Attempts</Card.Header>
                <Card.Body>
                  <Attempts />
                </Card.Body>
              </Card>
            </Row>
            <br />
            <br />
            <Row>
              <Card style={{ width: '45rem' }} >
                <Card.Header as="h5">Edit Profile</Card.Header>
                <Card.Body>
                  <Card.Title>Want to update your profile?</Card.Title>
                  <Button variant="danger" size="lg" onClick={handleShowEditUser}>Click Here!</Button>
                </Card.Body>
                <Card.Body>
                  <Card.Title>Want to change your password?</Card.Title>
                  <Button variant="danger" size="lg" onClick={handleShowEditPassword}>Click Here!</Button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Modal for Edit User Form */}
      <Modal show={showEditUser} onHide={handleCloseEditUser}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser />
        </Modal.Body>
      </Modal>

      {/* Modal for Edit User Pasdsword Form */}
      <Modal show={showEditPassword} onHide={handleCloseEditPassword}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditPassword />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Profile
