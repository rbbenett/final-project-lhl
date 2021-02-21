import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Login(props) {

  const [loginFormInput, setLoginFormInput] = useState({
    username: "",
    password: ""
  })

  const history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();
    axios.post('/login', {
      username: loginFormInput.username,
      password: loginFormInput.password
    })
      .then(res => {
        if (Array.isArray(res.data)) {
          localStorage.setItem('user_details', JSON.stringify(res.data[0]))
          props.handleCloseLogin();
          history.push("/play");
          history.go(0)
        } else {
          console.log("Incorrect username/password")
        }
      })
  }

  return (
    <div className="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="username" placeholder="Enter username"
              value={loginFormInput.username}
              onChange={e => {
                setLoginFormInput({
                  ...loginFormInput,
                  username: e.target.value
                })
              }}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password" placeholder="Password"
            value={loginFormInput.password}
            onChange={e => {
              setLoginFormInput({
                ...loginFormInput,
                password: e.target.value
              })
            }}
          />
        </Form.Group>
        <Button
          className="formSubmitButton"
          variant="outline"
          type="submit"
          onClick={e => loginUser(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}
