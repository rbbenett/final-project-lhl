import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import "./Register.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
    <div className="register">
      <Form className="register-form">
        <Form.Group controlId="formHeader">
        <h3>Register</h3>
        </Form.Group>
        
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          placeholder="Enter Password"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-30 characters long, contain letters and numbers, and
          must not contain spaces, special characters, or emoji.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Re-Enter Password" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Avatar" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms & conditions" />
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

export default Register