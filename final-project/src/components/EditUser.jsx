import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import "./EditUser.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import useApplicationData from '../hooks/useApplicationData';

function EditUser() {

  const [currentUserDetails, setCurrentUserDetails] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
    city: "",
    country: ""
  });

  const editUser = () => {
    axios.post('/edit', {
      username: currentUserDetails.username,
      first_name: currentUserDetails.first_name,
      last_name: currentUserDetails.last_name,
      email: currentUserDetails.email,
      avatar: currentUserDetails.avatar,
      city: currentUserDetails.city,
      country: currentUserDetails.country
    })
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div className="edit">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="firstname" 
              placeholder="Enter First Name"
              onChange={e => {
                setCurrentUserDetails({
                  ...currentUserDetails,
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
                setCurrentUserDetails({
                  ...currentUserDetails,
                  last_name: e.target.value
                })
              }} 
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="Username" 
            placeholder="Enter Username" 
            onChange={e => {
              setCurrentUserDetails({
                ...currentUserDetails,
                username: e.target.value
              })
            }}
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter Email" 
            onChange={e => {
              setCurrentUserDetails({
                ...currentUserDetails,
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
              setCurrentUserDetails({
                ...currentUserDetails,
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
              setCurrentUserDetails({
                ...currentUserDetails,
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
              setCurrentUserDetails({
                ...currentUserDetails,
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
          onClick = {editUser}
          >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EditUser