import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { RiKeyboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ForgotNewPass() {
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
    <div className="ForgotNewPass">
      <div className="npImg">
        <RiKeyboardFill />
      </div>
      <h2 className="title">Set new password</h2>
      <p className="littleInfo">Must be at least 8 characters.</p>
      <div className="npContainer">
        <p>Password</p>
        <input placeholder="*********" onChange={e=>handleEmailChange(e)} />
        <p>Confirm password</p>
        <input placeholder="*********" onChange={e=>handleEmailChange(e)} />
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
