import React, { useState } from 'react';
import useApplicationData from "./hooks/useApplicationData"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Components
import Footer from "./components/Footer.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Profile from "./components/Profile.jsx";
import Welcomepage from "./components/WelcomePage.jsx";
import GameConsole from "./components/GameConsole.jsx";
import NavbarTC from "./components/NavbarTC.jsx";

// Import stylesheets
import './App.css';

function App() {

  const {
    contents,
    setContents,
    gameConsole,
    updateGameConsole,
    userInput,
    setUserInput
  } = useApplicationData();

  console.log("checking sometjing");
  console.log("again test")
  
  return (
    <Router>
      <div className="app">
        <NavbarTC />
        <Switch>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/play">
            <GameConsole
              contents={contents}
            />
          </Route>
          <Route path="/">
            <Welcomepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;