import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillApple, AiOutlineGoogle, AiFillFacebook } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import "./signup.css";

export function Signup() {

  const [userfirstnameReg, setFirstnameReg] = useState('');
  const [surnamedReg, setSurnameeReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordeReg] = useState('');
  const [confirmPassdReg, setConfirmPassReg] = useState('');

  return (
    <Container style={{ marginTop: "10%", marginBottom: "5%" }}>
      <div className="form">
        <h2>SIGN UP</h2>
        <input
          className="form-input"
          placeholder="Firstname"
          type="text"
          required
          onChange={(e)=>{setFirstnameReg(e.target.value)}}
        />
        <input
          className="form-input"
          placeholder="Surname"
          type="text"
          required
          onChange={(e)=>{setSurnameeReg(e.target.value)}}
        />
        <input
          className="form-input"
          placeholder="Email"
          type="email"
          required
          onChange={(e)=>{setEmailReg(e.target.value)}}
        />
        <input
          className="form-input"
          placeholder="Password"
          type="password"
          required
          onChange={(e)=>{setPasswordeReg(e.target.value)}}
        />
        <input
          className="form-input"
          placeholder="Confirm Password"
          type="password"
          required
          onChange={(e)=>{setConfirmPassReg(e.target.value)}}
        />

        <div className="d-block terms">
          <p>
            <input type="checkbox" name="flexCheck" value="" />I agree all
            statements in <Link to="/terms" className="links">Terms of service.</Link>
          </p>
        </div>

        <button className="signup">Sign up</button>

        <div className="text-center log-in">
          <p>
            Are you a member? <Link to="/login" className="links">Login</Link>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%", fontSize: "20px" }}
          >
            <Link>
              <AiFillApple />
            </Link>
            <Link>
              <AiOutlineGoogle />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
