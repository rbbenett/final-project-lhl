import React from 'react'
import Register from "./components/Register"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function Main() {
  return (
    <div>
      <Navbar className="custom" />
      <Register />
      <Footer />
    </div>
  )
}

export default Main
