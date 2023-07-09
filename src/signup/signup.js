import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import logo from "../images/logo.png";
import "./signup.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export function Signup() {
  const [userinfo, setUserinfo] = useState({
    firstname: "",
    surname: "",
    email: "",
    pass: "",
    passAgain: "",
  });
  const [show, setShow] = useState({ pass: false, passAgain: false });
  return (
    <Container style={{ marginTop: "0%", marginBottom: "5%" }}>
      <div className="form">
        <Link to="/">
          <img className="signLogo" src={logo} alt="logo" />
        </Link>
        <h2>SIGN UP</h2>
        <input
          className="sign-form-input"
          placeholder="Firstname"
          type="text"
          required
          onChange={(e) => {
            setUserinfo({ ...userinfo, firstname: e.target.value });
          }}
        />
        <input
          className="sign-form-input"
          placeholder="Surname"
          type="text"
          required
          onChange={(e) => {
            setUserinfo({ ...userinfo, surname: e.target.value });
          }}
        />
        <input
          className="sign-form-input"
          placeholder="Email"
          type="email"
          required
          onChange={(e) => {
            setUserinfo({ ...userinfo, email: e.target.value });
          }}
        />
        <div className="sign-form-input-pass">
          <input
            className="sign-form-input signPassAgain"
            placeholder="Password"
            type={show.pass ? "text" : "password"}
            required
            onChange={(e) => {
              setUserinfo({ ...userinfo, pass: e.target.value });
            }}
          />
          <p className="signEyeIcon">
            {show.pass ? (
              <FaRegEye onClick={() => setShow({ ...show, pass: false })} />
            ) : (
              <FaRegEyeSlash onClick={() => setShow({ ...show, pass: true })} />
            )}
          </p>
        </div>
        <div className="sign-form-input-passAgain">
          <input
            className="sign-form-input signPass"
            placeholder="Confirm Password"
            type={show.passAgain ? "text" : "password"}
            onChange={(e) => {
              setUserinfo({ ...userinfo, passAgain: e.target.value });
            }}
            required
          />
          <p className="signEyeIcon">
            {show.passAgain ? (
              <FaRegEye
                onClick={() => setShow({ ...show, passAgain: false })}
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShow({ ...show, passAgain: true })}
              />
            )}
          </p>
        </div>

        <div className="d-block terms">
          <p>
            <input type="checkbox" name="flexCheck" value="" />I agree all
            statements in{" "}
            <Link to="/terms" className="links">
              Terms of service.
            </Link>
          </p>
        </div>

        <button className="signup">Sign up</button>

        <div className="text-center log-in">
          <p>
            Are you a member?{" "}
            <Link to="/login" className="links">
              Login
            </Link>
          </p>
          <p>or sign up with:</p>

          <div className="d-flex justify-content-between mx-auto otherConnect">
            <Link>
              <AiFillApple title="apple" />
            </Link>
            <Link>
              <AiOutlineGoogle title="google" />
            </Link>
            <Link>
              <TiSocialFacebook title="facebook" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
