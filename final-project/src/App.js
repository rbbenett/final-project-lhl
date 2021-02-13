import './App.css';

import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function App() {


  return (
    <div className="app">
      <Navbar />
      <Login />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
