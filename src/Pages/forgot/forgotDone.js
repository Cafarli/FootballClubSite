import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function ForgotDone() {
  return (
    <div className="ForgotDone">
      <div className="doneImg">
        <GrStatusGood />
      </div>
      <h2 className="title">All done!</h2>
      <p>Your password has been reseted.</p>
      <button>
        <Link to="/login">Back to Login</Link>
      </button>
    </div>
  );
}
