import './App.css';
import React, { Component } from 'react';
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Profile from "./components/Profile.jsx";
import Welcomepage from "./components/WelcomePage.jsx";
import GameConsole from "./components/GameConsole.jsx";
import { Navbar, Nav, NavLink } from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);

    // Here we initialize our components state
    this.state = {
        showLoginForm: false,
        showRegisterForm: false,
        showProfile: false
    };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
}

onLoginClick () {
    // On click we change our state – this will trigger our `render` method
    this.setState({ showLoginForm: !this.state.showLoginForm });
}

onRegisterClick () {
  // On click we change our state – this will trigger our `render` method
  this.setState({ showRegisterForm: !this.state.showRegisterForm });
}

onProfileClick () {
  this.setState({ showProfile: !this.state.showProfile });
}

renderLoginForm () {
   return (
       <Login />
   );
}

renderRegisterForm () {
  return (
      <Register />
  );
}

renderProfile () {
  return (
    <Profile />
  );
}

  
  render(){
    const { showLoginForm, showRegisterForm, showProfile } = this.state;
  return (
    <div className="app">
      {/* if not loggin in */}
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
        <Nav.Link onClick={ this.onProfileClick }>Profile</Nav.Link>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
          <Nav.Link onClick={ this.onLoginClick }>Login</Nav.Link>
          <Nav.Link onClick={ this.onRegisterClick }>Register</Nav.Link>
          </Nav>
      </Navbar>
      {showLoginForm && this.renderLoginForm()}
      {showRegisterForm && this.renderRegisterForm()}
      {showProfile && this.renderProfile()}
      {/* Once logged in */}
      {/* <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Navbar.Brand>Welcome back, Bob</Navbar.Brand>
            <Nav.Link href="#id">View profile</Nav.Link>
            <Nav.Link eventKey={2} href="#logout">Logout</Nav.Link>
          </Nav>
      </Navbar>
      <Profile />
      {/* <Footer /> */}
      {/* <Leaderboard/> */}
      {/* <Welcomepage /> */}
      <GameConsole />
    </div>
  );
}
}

export default App;
