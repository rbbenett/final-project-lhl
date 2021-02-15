import React, { useState, setState, useEffect } from 'react';
import "./GameConsole.css"
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import useApplicationData from "../hooks/useApplicationData"


function GameConsole() {
  const state = useApplicationData();

  return (
    <div className="gameconsole">
      <Jumbotron>
        <h1>TypeCraft</h1>
        <>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </>
        <br/><br/><br/>
        <ProgressBar animated now={45} variant="success" />
        <br/>
        <p>
          {state.contents[0]}
        </p>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>TYPE HERE:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br/>
        <p>
          <Button 
            variant="primary"
            >Resume from Level X</Button>
          <Button variant="primary"
          onClick={() => console.log("state contents look like>>", state.contents["contents"][0].content)}
          >Start Game!</Button>
        </p>
      </Jumbotron>
      
    </div>
  )
}

export default GameConsole
