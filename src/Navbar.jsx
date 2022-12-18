import React from 'react'
import { NavLink } from 'react-browser-router'

const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-secondary" aria-label="Eighth navbar example">
    <div className="container">
      <NavLink className="navbar-brand text-bold" to="/">JM-Company</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/Career" tabindex="-1" aria-disabled="true">Career</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/Contact" tabindex="-1" aria-disabled="true">Contact</NavLink>
          </li>
    
        </ul>
      
      </div>
    </div>
  </nav>


</>
  )
}

export default Navbar