import React from 'react'
import "./Navbar.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
  return (
    <div className="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <Form className="register-form">
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
      </Form> */}
    </div>
  )
}

export default Login
