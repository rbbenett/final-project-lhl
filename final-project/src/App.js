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

export default function App() {

  const currentUser = (localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details"))?.id)

  const {
    contents,
  } = useApplicationData();

  return (
    <Router>
      <div className="app">
        <NavbarTC />
        <Switch>
          {currentUser ?
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            :
            <Route path="/">
              <Welcomepage />
            </Route>
          }
          {currentUser ?
            <Route path="/profile">
              <Profile />
            </Route>
            :
            <Route path="/">
              <Welcomepage />
            </Route>
          }
          {currentUser ?
            <Route path="/play">
              <GameConsole
                contents={contents}
              />
            </Route>
            :
            <Route path="/">
              <Welcomepage />
            </Route>
          }
          <Route path="/">
            <Welcomepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
