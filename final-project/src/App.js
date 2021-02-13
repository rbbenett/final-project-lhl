import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Login />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
