import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Register(props) {

  const history = useHistory();

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

  const registerUser = (e) => {
    e.preventDefault();
    console.log("hi")
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
        axios.post('/login', {
          username: newUserDetails.username,
          password: newUserDetails.password
        })
        .then(res => {
        console.log('as well as here')
        localStorage.setItem('user_details', JSON.stringify(res.data[0]))
        history.push("/play");
        history.go(0)
        props.handleCloseRegister();
        })
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

        <Form.Row >
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

        <fieldset style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Avatar
            </Form.Label>
            <Row sm={10}>
              <Form.Check
                className="avatarCheckButton"
                type="radio"
                label={<img variant="top" src="images/dinosaur.png" className="registerAvatar" />}
                name="formHorizontalAvatars"
                id="Dinosaur"
                onChange={e => {
                  setNewUserDetails({
                    ...newUserDetails,
                    avatar: e.target.id
                  })
                }}
              />
              <Form.Check
                className="avatarCheckButton"
                type="radio"
                label={<img variant="top" src="images/ghost.png" className="registerAvatar" />}
                name="formHorizontalAvatars"
                id="Ghost"
                onChange={e => {
                  setNewUserDetails({
                    ...newUserDetails,
                    avatar: e.target.id
                  })
                }}
              />
              <Form.Check
                className="avatarCheckButton"
                type="radio"
                label={<img variant="top" src="images/monster.png" className="registerAvatar" />}
                name="formHorizontalAvatars"
                id="Monster"
                onChange={e => {
                  setNewUserDetails({
                    ...newUserDetails,
                    avatar: e.target.id
                  })
                }}
              />
              <Form.Check
                className="avatarCheckButton"
                type="radio"
                label={<img variant="top" src="images/unicorn.png" className="registerAvatar" />}
                name="formHorizontalAvatars"
                id="Unicorn"
                onChange={e => {
                  setNewUserDetails({
                    ...newUserDetails,
                    avatar: e.target.id
                  })
                }}
              />
              <Form.Check
                className="avatarCheckButton"
                type="radio"
                label={<img variant="top" src="images/fox.png" className="registerAvatar" />}
                name="formHorizontalAvatars"
                id="Fox"
                onChange={e => {
                  setNewUserDetails({
                    ...newUserDetails,
                    avatar: e.target.id
                  })
                }}
              />
            </Row>
          </Form.Group>
        </fieldset>

        <Button
          className="formSubmitButton"
          variant="outline-info"
          type="submit"
          onClick={(e) => registerUser(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}