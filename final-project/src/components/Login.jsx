import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Login.css';

export default function Login(props) {

  const [loginFormInput, setLoginFormInput] = useState({
    username: "",
    password: ""
  })

  const [incorrectLogin, setIncorrectLogin] = useState(false);

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
          setIncorrectLogin(false);
          history.push("/play");
          history.go(0)
        } else {
          console.log("Incorrect username/password");
          setIncorrectLogin(true);
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
        {incorrectLogin && 
          <Alert variant="danger">
            Incorrect username or password. Please try again.
          </Alert>
        }
      </Form>
    </div>
  )
}
