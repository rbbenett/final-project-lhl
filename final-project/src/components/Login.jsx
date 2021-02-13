import React from 'react'
import "./Navbar.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
  return (
    <div className="login">
      <Form className="register-form">
        <Form.Group controlId="formHeader">
          <h3>Login</h3>
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter Password"
          />
        </Form.Group>

        <Form.Group controlId="formSubmitButton">
          <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login
