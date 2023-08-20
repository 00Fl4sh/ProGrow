import React, { useState } from "react";
// import axios from "axios";
import "./Auth.css";

const Auth = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      Username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3008/api/auth/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const json = await response.json();
      console.log(json);

      if (response.status === 200) {
        setSuccessMessage("User account created successfully");
        setErrorMessage("");
      }
      if (response.status === 200) {
        setMessage(" ");
      }
    } catch (error) {
      console.error("Failed to create user account:", error);
      setErrorMessage("Failed to create user account");
      setSuccessMessage("");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Username</label>
        <input
          type="Username"
          id="Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already Login <button to={"/Login"}>Login</button></p>
    </div>
  );
};

export default Auth;
