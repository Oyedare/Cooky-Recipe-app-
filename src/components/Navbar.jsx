import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="container navbar">
      <Link to="/" style={{ textDecoration: 'none', color: '#000'}}>
        <div className="logo">
          <h3>Cooky..</h3>
        </div>
      </Link>
      <Link to="/recipes" style={{ textDecoration: 'none'}}>
        <div className="home-button nav-btn">
          Get Recipe
        </div>
        </Link>
    </nav>
  )
}
