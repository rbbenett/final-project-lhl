import './App.css';

import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="app">
      {/* if not loggin in */}
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#register">Register</Nav.Link>
          </Nav>
      </Navbar>
      {/* Once logged in */}
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Typecraft</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Navbar.Brand>Welcome back, Bob</Navbar.Brand>
            <Nav.Link href="#id">View profile</Nav.Link>
            <Nav.Link eventKey={2} href="#logout">Logout</Nav.Link>
          </Nav>
      </Navbar>
      <Login />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
