import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
