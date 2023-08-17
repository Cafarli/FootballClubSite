import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ForgotCode(props) {
  return (
    <div className="ForgotCode">
      <div className="codeImg">
        <IoMailOpenOutline />
      </div>
      <h2 className="title">Password reset</h2>
      <p>Write reset code.</p>
      <div className="codeContainer">
        <div className="inputs">

        <input type="text" maxlength="1" onInput={(e)=>e.target.value=e.target.value.replace(/[^0-9]/g,'')} />
        <input type="text" maxlength="1" onInput={(e)=>e.target.value=e.target.value.replace(/[^0-9]/g,'')} />
        <input type="text" maxlength="1" onInput={(e)=>e.target.value=e.target.value.replace(/[^0-9]/g,'')} />
        <input type="text" maxlength="1" onInput={(e)=>e.target.value=e.target.value.replace(/[^0-9]/g,'')} />
        </div>
        <button className="contBtn"><Link to="/">Continue</Link></button>
        <p>Didn't receive the email? <span>Resend again</span></p>
      </div>
      <Link to="/login">
        <div className="backLog" >
          <p>
            <BsArrowLeft />
            Back to log in
          </p>
        </div>
      </Link>
    </div>
  );
}
