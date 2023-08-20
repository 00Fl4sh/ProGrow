import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Track login status


  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
       const response = await fetch("http://localhost:3008/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const json = await response.json();
      console.log(json);

      if (response.status === 200) {
        setLoggedIn(true); // Set login status to true        
        // Login successful, you can perform further actions here
        setErrorMessage("");
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while logging in");
    }
  };
  const handleLogout = () => {
    setLoggedIn(false); // Set login status to false on logout
  };

  return (
    <div className="login-container">
      <h2>{loggedIn ? "Welcome, User!" : "Login"}</h2>
      {loggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ):(
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit">Login</button>
      </form>
      )}
    </div>
  );
};

export default Login;
