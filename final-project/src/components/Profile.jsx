import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button, ProgressBar, Modal } from 'react-bootstrap';
import EditUser from './EditUser';
import EditPassword from './EditPassword'
import "./Profile.css"

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
                <Button variant="primary" href="/leaderboard">Global Leaderboard</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row>
              <Card style={{ width: '45rem' }} >
                <Card.Header as="h5">Edit Profile</Card.Header>
                <Card.Body>
                  <Card.Title>Want to update your profile?</Card.Title>
                  <Button variant="primary" onClick={handleShowEditUser}>Click Here!</Button>
                </Card.Body>
              </Card>
            </Row>
            <br/>
            <br/>
            <Row>
              <Card style={{ width: '45rem' }} >
                <Card.Header as="h5">Change Password</Card.Header>
                <Card.Body>
                  <Card.Title>Want to change your password?</Card.Title>

                  <Button variant="primary" onClick={handleShowEditPassword}>Click Here!</Button>
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
