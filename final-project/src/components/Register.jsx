import React, { useState } from 'react';
import useApplicationData from "../hooks/useApplicationData";
import axios from 'axios';
import { Form, Button, Col, Row, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register(props) {

  const { users } = useApplicationData();

  const history = useHistory();

  const [usernameIsAvailable, setUsernameIsAvailable] = useState(true);

  const [newUserDetails, setNewUserDetails] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    comfirmpassword: "",
    avatar: "",
    city: "",
    country: ""
  });

  const checkUniqueUsername = (e) => {
    let desiredUsername = e.target.value;
    if (desiredUsername.length >= 1) {
      setUsernameIsAvailable(true);
    }
    setNewUserDetails({
      ...newUserDetails,
      username: e.target.value
    })
    for (let i = 0; i < users.length; i++) {
      console.log(users)
      if (users[i].username === desiredUsername) {
        setUsernameIsAvailable(false);
        break;
      }
    }
  }

  //Register with validation for empty fields
  const registerUser = (e) => {
    e.preventDefault();
    if (newUserDetails.username === "") {
      alert("Username cannot be left blank.")
      return
    } else if (newUserDetails.first_name === "") {
      alert("First name cannot be left blank.")
      return
    } else if (newUserDetails.last_name === "") {
      alert("Last name cannot be left blank.")
      return
    } else if (newUserDetails.email === "" || newUserDetails.email.includes("@") !== true) {
      alert("Email not valid. Please enter a valid e-mail address.")
      return
    } else if (newUserDetails.password === "") {
      alert("Password cannot be left blank.")
      return
    } else if (newUserDetails.password.length < 8) {
      alert("Password too short.")
      return
    } else if (newUserDetails.password > 20) {
      alert("Password too long.")
      return
    } else if (newUserDetails.avatar === "") {
      alert("Please select an avatar.")
    }
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
            <OverlayTrigger
              trigger = 'focus'
              placement={'top'}
              overlay={
                newUserDetails.username.length > 0 ?
                <Tooltip id={`tooltip-top`} style={{color: 'red'}}>
                  {newUserDetails.username.length > 0 && (usernameIsAvailable ? "Username is available" : "Username already taken")}
                </Tooltip> :
                <Tooltip id={`tooltip-top`} style={{display: 'none'}}>
                </Tooltip> 
              }
            >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="Username"
                  placeholder="Enter Username"
                  value={newUserDetails.username}
                  onChange={(e) => checkUniqueUsername(e)}
                />
              </InputGroup>
            </OverlayTrigger>
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
            <Form.Control type="password"
              placeholder="Confirm Password"
              onChange={e => {
                setNewUserDetails({
                  ...newUserDetails,
                  comfirmpassword: e.target.value
                })
              }} />
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
            <Form.Label>Province</Form.Label>
            <Form.Control
              type="Country"
              placeholder="Enter Province"
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
          variant="outline"
          type="submit"
          onClick={(e) => registerUser(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}