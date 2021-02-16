import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Col } from 'react-bootstrap';
import "./EditPassword.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function EditPassword() {

  const [currentUserPassword, setCurrentUserPassword] = useState({
    password: "",
  });

  const editUserPassword = () => {
    axios.post('/editPassword', {
      password: currentUserPassword.password,
    })
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div className="edit">
      <Form>
        <Form.Group className="currentPass" controlId="formBasicPassword">
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Current Password"
          />
        </Form.Group>
        <Form.Row>
        <Form.Group as={Col} controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="New Password" 
            onChange={e => {
              setCurrentUserPassword({
                ...currentUserPassword,
                password: e.target.value
              })
            }}
            />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long.
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicConfirmPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm New Password" />
        </Form.Group>
        </Form.Row>
        <Button 
          variant="primary" 
          type="submit"
          onClick = {editUserPassword}
          >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EditPassword