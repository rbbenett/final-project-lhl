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
    city: "",
    country: ""
  });

  const editUser = () => {
    axios.post('/edit', {
      username: currentUserDetails.username,
      first_name: currentUserDetails.first_name,
      last_name: currentUserDetails.last_name,
      email: currentUserDetails.email,
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
              placeholder={ localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).first_name }
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
              placeholder={ localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).last_name }
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
            placeholder={ localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).username } 
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
            placeholder={ localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).email }
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
        <Form.Group as={Col} controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="City" 
            placeholder={ localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).city } 
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
            placeholder={ localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).country } 
            onChange={e => {
              setCurrentUserDetails({
                ...currentUserDetails,
                country: e.target.value
              })
            }}
            />
        </Form.Group>
        </Form.Row>

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