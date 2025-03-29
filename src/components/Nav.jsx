import React from 'react'
import '../styles/LandingPage.css'

const Nav = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Land Map</h1>
        <nav className="nav">
            <a href="#">Find a Car</a>
            <a href="#">Buy Credits</a>
            <a href="#">Support</a>
            <a href="#">Signup</a>
            <button className="login-btn">Login</button>
        </nav>
    </header>
    </div>
  )
}

export default Nav
