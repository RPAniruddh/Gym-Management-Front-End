import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" aria-label="Tenth navbar example" style={{ backgroundColor: 'beige' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/signIn">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/signUp">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;    