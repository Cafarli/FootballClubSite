import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";

export function Login() {
  return (
    <Container style={{ marginTop: "10%", marginBottom: "10%" }}>
      <div className="formLogin">
        <h2>LOG IN</h2>
        <input
          className="form-input"
          placeholder="Email"
          type="email"
          required
        />
        <input
          className="form-input"
          placeholder="Password"
          type="password"
          required
        />

        <div className="d-block remember-forgot">
          <p>
            <input type="checkbox" name="flexCheck" value="" />
            <Link to="/terms">Remember me</Link>
          </p>

          <p><Link to="/forgot">Forgot password?</Link></p>
        </div>

        <button className="signup">Log in</button>

        <div className="text-center log-in">
          <p>
            Don't you have account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
