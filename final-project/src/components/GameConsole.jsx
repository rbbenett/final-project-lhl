import React, { useState, setState, useEffect } from 'react';
import "./GameConsole.css"
import { Jumbotron, Button, ProgressBar, Spinner, InputGroup, FormControl, Card } from 'react-bootstrap';
import useApplicationData from "../hooks/useApplicationData"

function GameConsole(props) {

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
        <br /><br /><br />
        <ProgressBar animated now={45} variant="success" />
        <br />
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {props.gameConsole}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br />
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>TYPE HERE:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea"
            value={props.userInput}
            onChange={(e) => props.setUserInput(e.target.value)}
          />
        </InputGroup>
        <br />
        <p>
          <Button variant="primary">
            Resume from Level X
          </Button>
          <Button
            variant="primary"
            onClick={props.updateGameConsole}
          >
            Start Game!
          </Button>
        </p>
      </Jumbotron>

    </div>
  )
}

export default GameConsole
