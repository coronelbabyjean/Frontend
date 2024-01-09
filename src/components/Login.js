import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Login({ handleLogin, isAuthenticated }) {
  // State for username, password, and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  // React Router's history object to navigate programmatically
  const history = useHistory();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if both username and password are provided
    if (!username && !password) {
      setError("Username and password are required.");
      return;
    }

    // Validate if username is provided
    if (!username) {
      setError("Please enter your username");
      return;
    }

    // Validate if password is provided
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    // API request configuration
    const configuration = {
      method: "post",
      url: "http://localhost:8000/api/login",
      data: {
        username,
        password,
      },
    };

    // Make the API request
    axios(configuration)
      .then((result) => {
        // Handle successful login
        handleLogin(result.data.token);
        
        // Redirect to the vehicle-list page
        history.push("/vehicle-list");
      })
      .catch((error) => {
        // Handle login failure and display an error message
        setError("Invalid username or password."); // Handle specific errors from the API if needed
      });
  };

  return (
    <div className="login-register-form">
      <div className="login-register-box">
        {/* Login form heading */}
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>LOGIN</h2>
        
        {/* Display error message if present */}
        {error && <Alert variant="danger">{error}</Alert>}
        
        {/* Login form */}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            {/* Input for username */}
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              style={{ marginBottom: "2px" }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {/* Input for password */}
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ marginBottom: "8px" }}
            />
          </Form.Group>

          {/* Submit button */}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        {/* Link to registration page */}
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          Don't have an account? <Link to="/register">Register now!</Link>
        </div>
      </div>
    </div>
  );
}
