import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../../Images/logo.png";
import "./login.css";

export function Login() {
  const [show, setShow] = useState(false);
  return (
    <Container style={{ marginTop: "0%", marginBottom: "10%" }}>
      <div className="formLogin">
        <Link to="/">
          <img className="logLogo" src={logo} alt="logo" />
        </Link>
        <h2>LOG IN</h2>
        <div className="log-form-input-mail">
          <input
            className="log-form-input"
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <div className="log-form-input-pass">
          <input
            className="log-form-input logPass"
            placeholder="Password"
            type={show ? "text" : "password"}
            required
          />
          <p className="logEyeIcon">
            {show ? (
              <FaRegEye onClick={(e) => setShow(false)} />
            ) : (
              <FaRegEyeSlash onClick={(e) => setShow(true)} />
            )}
          </p>
        </div>

        <div className="d-block remember-forgot">
          <p className="rf-checkRem">
            <input type="checkbox" name="flexCheck" value="" />
            Remember me
          </p>

          <p className="rf-forgot">
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
        </div>

        <button className="loginBtn">Log in</button>

        <div className="text-center log-in">
          <p>
            Don't you have account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
