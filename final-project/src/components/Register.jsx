import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Col from 'react-bootstrap/Col'
import "./Register.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

  const [newUserDetails, setNewUserDetails] = useState({
    username: "", 
    first_name: "", 
    last_name: "", 
    email: "", 
    password: "", 
    avatar: "", 
    city: "", 
    country: ""
  })

  const registerUser = () => {
    axios.post('http://localhost:3004/api/users', {
      username: newUserDetails.username, 
      first_name: newUserDetails.first_name, 
      last_name: newUserDetails.last_name, 
      email: newUserDetails.email, 
      password: newUserDetails.password, 
      avatar: newUserDetails.avatar, 
      city: newUserDetails.city, 
      country: newUserDetails.country
    })
    .then(res => {
      console.log(res);
      console.log("ERRORROORORO")
    })
  }

  return (
    <div className="register">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="firstname" 
              placeholder="Enter First Name"
              onChange={e => {
                setNewUserDetails({
                  ...newUserDetails,
                  first_name: e.target.value
                })
              }}
              />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="lastname" 
              placeholder="Enter Last Name"
              onChange={e => {
                setNewUserDetails({
                  ...newUserDetails,
                  last_name: e.target.value
                })
              }} 
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="Username" 
            placeholder="Enter Username" 
            onChange={e => {
              setNewUserDetails({
                ...newUserDetails,
                username: e.target.value
              })
            }}
            />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter Email" 
            onChange={e => {
              setNewUserDetails({
                ...newUserDetails,
                email: e.target.value
              })
            }}
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={e => {
              setNewUserDetails({
                ...newUserDetails,
                password: e.target.value
              })
            }}
            />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-30 characters long, contain letters and numbers, and
            must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="confirmpassword" placeholder="Confirm Password" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Avatar" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms & conditions" />
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit"
          onClick = {registerUser}
          >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register