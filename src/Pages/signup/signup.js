import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import logo from "../../Images/logo.png";
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
  const [error, setError] = useState({
    firstnameErr: null,
    surnameErr: null,
    mailErr: null,
    passErr: null,
    passAgainErr: null,
  });
  const [show, setShow] = useState({ pass: false, passAgain: false });
  const [form, setForm] = useState(false);

  // NAME AND SURNAME VALIDATION
  function isValidName(name) {
    return /^[A-Za-z]{3,}$/.test(name);
  }
  const handleNameChange = (e) => {
    if (!isValidName(e.target.value)) {
      setError({ ...error, [e.target.name + "Err"]: "Name is invalid" });
    } else {
      setError({ ...error, [e.target.name + "Err"]: null });
    }
    setUserinfo({ ...userinfo, [e.target.name]: e.target.value });
  };
  // EMAIL VALIDATION
  function isValidEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }
  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError({ ...error, mailErr: "Email is invalid" });
    } else {
      setError({ ...error, mailErr: null });
    }
    setUserinfo({ ...userinfo, email: e.target.value });
  };
  // PASSWORD VALIDATION
  function isValidPassword(pass) {
    return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass);
  }
  const handlePassChange = (e) => {
    if (e.target.value.length < 8) {
      setError({ ...error, passErr: "Şifrədə ən az 8 simvol olmalıdır." });
    } else {
      if (!isValidPassword(e.target.value)) {
        setError({
          ...error,
          passErr:
            "Şifrə uyğun deyil(Böyük, kiçik hərflər, rəqəmlər, xüsusi işarələr tələb olunur.",
        });
      } else {
        setError({ ...error, passErr: null });
      }
    }

    setUserinfo({ ...userinfo, pass: e.target.value });
  };
  // IDENTITY PASSWORDS
  const handlePassIdentity = (e) => {
    if (e.target.value !== userinfo.pass) {
      setError({
        ...error,
        passAgainErr: "Şifrələr eyni deyil.",
      });
    } else {
      setError({ ...error, passAgainErr: null });
    }
  };
  // BUTTON CHECK
  useEffect(()=>{
    if(error.firstnameErr===null && error.surnameErr===null && error.mailErr===null && error.passErr===null &&error.passAgainErr===null) {
      setForm(true);
    }
    else {
      setForm(false);
    }
    console.log('form', form);
  }, [error, form])
  return (
    <Container style={{ marginTop: "0%", marginBottom: "5%" }}>
      <div className="formContainer">
        <Link to="/">
          <img className="signLogo" src={logo} alt="logo" />
        </Link>
        <h2>SIGN UP</h2>
        <form className="signForm" >
          <div className="sign-form-input name">
            <input
              placeholder="Firstname"
              type="text"
              name="firstname"
              required
              onChange={(e) => {
                handleNameChange(e); 
              }}
            />
            {error.firstnameErr && (
              <span className="error">{error.firstnameErr}</span>
            )}
          </div>
          <div className="sign-form-input surname">
            <input
              placeholder="Surname"
              type="text"
              name="surname"
              required
              onChange={(e) => {
                handleNameChange(e); 
              }}
            />
            {error.surnameErr && (
              <span className="error">{error.surnameErr}</span>
            )}
          </div>
          <div className="sign-form-input email">
            <input
              placeholder="Email"
              type="email"
              required
              onChange={(e) => {
                handleEmailChange(e); 
              }}
            />
            {error.mailErr && <span className="error">{error.mailErr}</span>}
          </div>
          <div className="sign-form-input pass">
            <input
              placeholder="Password"
              type={show.pass ? "text" : "password"}
              required
              onChange={(e) => {
                handlePassChange(e); 
              }}
            />
            <p className="signEyeIcon">
              {show.pass ? (
                <FaRegEye onClick={() => setShow({ ...show, pass: false })} />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShow({ ...show, pass: true })}
                />
              )}
            </p>
            {error.passErr && <span className="error">{error.passErr}</span>}
          </div>
          <div className="sign-form-input passAgain">
            <input
              placeholder="Confirm Password"
              type={show.passAgain ? "text" : "password"}
              onChange={(e) => {
                handlePassIdentity(e); 
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
            {error.passAgainErr && (
              <span className="error">{error.passAgainErr}</span>
            )}
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
          
          <button type="submit" className="signup" disabled={ form ? false : true } onMouseOver={console.log(form)} >Sign up</button>
        </form>

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
