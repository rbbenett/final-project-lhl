import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function Login(props) {

  const [loginFormInput, setLoginFormInput] = useState({
    username: "",
    password: ""
  })

  const loginUser = (e) => {
    e.preventDefault();
    axios.post('/login', {
      username: loginFormInput.username,
      password: loginFormInput.password
    })
    .then(res => {
      console.log(res);
      if (Array.isArray(res.data)) {
        localStorage.setItem('user_details', JSON.stringify(res.data[0]))
        props.handleCloseLogin();
      } else {
        console.log("Incorrect username/password")
      }
    })
  }

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/profile`; 
    history.push(path);
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit"
        onClick={e => {loginUser(e); routeChange()}}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
