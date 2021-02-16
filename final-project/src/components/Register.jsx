import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import "./Register.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import useApplicationData from '../hooks/useApplicationData';

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
  });

  const registerUser = () => {
    axios.post('/register', {
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

        <Form.Row>
          <Form.Group as={Col} controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
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
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicEmail">
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
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formBasicPassword">
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
              Your password must be 8-20 characters long.
          </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="City"
              placeholder="Enter City"
              onChange={e => {
                setNewUserDetails({
                  ...newUserDetails,
                  city: e.target.value
                })
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="Country"
              placeholder="Enter Country"
              onChange={e => {
                setNewUserDetails({
                  ...newUserDetails,
                  country: e.target.value
                })
              }}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Avatar" />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={registerUser}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register