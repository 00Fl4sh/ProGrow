import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Top.css";
import Avtara from "../Avtara/Avtara";

const Top = () => {
  
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  const handleLogout = () => {
    setLoggedIn(false); // Set login status to false on logout
  };

  return (
    <div>
      <nav className="main-nav">
        <div className="navbar">
          <Link to="/" className="nav-item nav-logo">
            <img src="https://dz8fbjd9gwp2s.cloudfront.net/logos/63877d7ae4b0715e599aa5a1.png?v=17" alt="logo" width={90} />
          </Link>
          <Link to="/MainHomeBar" className="nav-item nav-btn">
            Home
          </Link>
          <Link to="/MyNetwork" className="nav-item nav-btn">
            My Network
          </Link>
          <Link to="/ForTeam" className="nav-item nav-btn">
            ForTeam
          </Link>
          <form action="">
            <input type="text" placeholder="Search" />
          </form>

          {loggedIn ? (
            <>
              <button onClick={handleLogout} className="nav-item nav-link">
                Logout
              </button>
              <Avtara backgroundColor={"blue"} py={"7px"} px={"10px"} borderRadius={"50%"}>
                <Link to="/User" style={{ textDecoration: "none", color: "white" }}>M</Link>
              </Avtara>
              <Link to="/Auth" className="nav-item nav-link">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login" className="nav-item nav-link">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Top;
