import React, { useState } from "react";
import "./Forgot.css";
import pass from "../../Images/forgot/password.png";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ForgotMail() {
  const [buttonActive, setButtonActive] = useState(false);
  // EMAIL VALIDATION
  function isValidEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }
  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  };
  return (
    <div className="ForgotMail">
      <div className="passImg">
        <img alt="password-icon" src={pass} />
      </div>
      <h2 className="title">Forgot password?</h2>
      <p>We'll send you a code for reset.</p>
      <div className="mailContainer">
        <p>Email</p>
        <input placeholder="Enter your email" onChange={e=>handleEmailChange(e)} />
        <button disabled={buttonActive?true:false}><Link to="/">Reset Password</Link></button>
      </div>
      <Link to="/login">
        <div className="backLog">
          <p>
            <BsArrowLeft />
            Back to log in
          </p>
        </div>
      </Link>
    </div>
  );
}
