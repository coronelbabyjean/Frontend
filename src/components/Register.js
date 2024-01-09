import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Register() {
  // State for username, password, and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks for username and password
    if (!username && !password) {
      setError("Username and password are required.");
      return;
    }

    if (!username) {
      setError("Username is required.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    if (username.length < 5) {
      setError("Username should be at least 5 characters long.");
      return;
    }

    // Password validation using regex
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password should be at least 8 and not greater than 30 characters, with one uppercase letter and one special character."
      );
      return;
    }

    // API request configuration
    const configuration = {
      method: "post",
      url: "http://localhost:8000/api/register",
      data: {
        username,
        password,
      },
    };

    // Make the API request for registration
    axios(configuration)
      .then((result) => {
        // Redirect to the login page upon successful registration
        history.push("/login");
      })
      .catch((error) => {
        // Handle registration failure and display an error message
        setError("Registration failed. Please try again."); // Handle specific errors from the API if needed
      });
  };

  return (
    <div className="login-register-form">
      <div className="login-register-box">
        {/* Registration form heading */}
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Register</h2>
        
        {/* Display error message if present */}
        {error && <Alert variant="danger">{error}</Alert>}
        
        {/* Registration form */}
        <Form onSubmit={(e) => handleSubmit(e)}>
          {/* Form input for username */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              style={{ marginBottom: "8px" }}
            />
          </Form.Group>

          {/* Form input for password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
            Register
          </Button>
        </Form>

        {/* Link to the login page for existing users */}
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          Already have an account? <Link to="/login">Login now!</Link>
        </div>
      </div>
    </div>
  );
}
