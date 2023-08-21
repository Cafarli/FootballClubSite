import React, { useState } from "react";
import "./Forgot.css";
import bg from "../../Images/backgroundImages/password.gif";
import passImg from "../../Images/forgot/password.png";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoMailOpenOutline } from "react-icons/io5";
import { RiKeyboardFill } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr"

export default function Forgot() {
  const [lineColor, setLineColor] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });
  const [btns, setBtns] = useState({
    mail: false,
    code: false,
    newPass: false,
  });
  const [err, setErr] = useState({
    mailErr: false,
    newPassErr: false,
    newConfPassErr: false,
  });

  // EMAIL VALIDATION
  function isValidEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }
  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setBtns({ mail: false });
      setErr({ mail: "Invalid mail" });
    } else {
      setBtns({ mail: true });
      setErr({ mail: "" });
    }
  };

  // CHECK SECURITY CODE
  const [codes, setCode ] = useState({
    firstCode: "",
    secondCode: "",
    thirdCode: "",
    fourthCode: ""
  })
  const handleCode = (e) =>  {
    // setCode({...codes, [e.target.name] : e.target.value });
    // if( codes.firstCode!=='' && codes.secondCode!=='' && codes.thirdCode!=='' && codes.fourthCode!=='' ) {
    //   setBtns({ code : true });
    // }
    // else {
    //   setBtns({ code : false });
    // }
    console.log(e.target.name, e.target.value);
    // console.log("code", btns.code);
    console.log("codeS", codes);
  }


  // NEW PASSWORD
  const [pass, setPass] = useState({nPass:"", nConfPass:""});
  const handlePassword = (e) => {
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(e.target.value);
    if (valid) {
      setBtns({ newPass: true });
      setErr({ newPassErr: "" });
        if (pass.nConfPass === pass.nPass) {
          setBtns({ newPass: true });
          setErr({ newPassErr: "" });
        }
        else {
          setBtns({ newPass: false });
          setErr({ newPassErr: "Passwords are not the same" });
        }
    } else {
      setBtns({ newPass: false });
      setErr({ newPassErr: "Weak password" });
    }
  };
  const handlePassEqual = (e) => {
    if (e.target.value === pass.nPass) {
      setBtns({ newPass: true });
      setErr({ newConfPassErr: "" });
    }
    else {
      setBtns({ newPass: false });
      setErr({ newConfPassErr: "Passwords are not the same" });
    }
  }

  return (
    <div className="ForgotPage">
      <div className="page">
        {/* ADD YOUR EMAIL */}
        {lineColor.first ? (
          <div className="ForgotMail">
            <div className="passImg">
              <img alt="password-icon" src={passImg} />
            </div>
            <h2 className="title">Forgot password?</h2>
            <p>We'll send you a code for reset.</p>
            <div className="mailContainer">
              <p>Email</p>
              <input
                placeholder="Enter your email"
                name="mail"
                onChange={(e) => handleEmailChange(e)}
              />
              <span>{err.mailErr}</span>

              <button
                disabled={btns.mail ? false : true}
                onClick={() => setLineColor({ second: true })}
              >
                Reset Password
              </button>
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
       
       //   ADD SECURTIY CODE
        ) : lineColor.second ? (
          <div className="ForgotCode">
            <div className="codeImg">
              <IoMailOpenOutline />
            </div>
            <h2 className="title">Password reset</h2>
            <p>Write reset code.</p>
            <div className="codeContainer">
              <div className="inputs">
                <input
                  type="text"
                  maxLength="1"
                  name="firstCode"
                  // onChange={(e) => { setCode({...codes, [e.target.name] : e.target.value }); handleCode(e); }}
                  onInput={(e) =>
                    {(e.target.value = e.target.value.replace(/[^0-9]/g, "")); handleCode(e);setCode({...codes, [e.target.name] : e.target.value }); handleCode(e)}
                  }
                />
                <input
                  type="text"
                  maxLength="1"
                  name="secondCode"
                  // onChange={(e) => {  setCode({...codes, [e.target.name] : e.target.value }); handleCode(e); }}
                  onInput={(e) =>
                    {(e.target.value = e.target.value.replace(/[^0-9]/g, "")); handleCode(e); setCode({...codes, [e.target.name] : e.target.value }); handleCode(e)}
                  }
                />
                <input
                  type="text"
                  maxLength="1"
                  name="thirdCode"
                  // onChange={(e) => { setCode({...codes, [e.target.name] : e.target.value }); handleCode(e); }}
                  onInput={(e) =>
                    {(e.target.value = e.target.value.replace(/[^0-9]/g, "")); handleCode(e); setCode({...codes, [e.target.name] : e.target.value }); handleCode(e)}
                  }
                />
                <input
                  type="text"
                  maxLength="1"
                  name="fourthCode"
                  onChange={(e) => {  setCode({...codes, [e.target.name] : e.target.value }); handleCode(e); }}
                  onInput={(e) =>
                    {(e.target.value = e.target.value.replace(/[^0-9]/g, "")); handleCode(e); setCode({...codes, [e.target.name] : e.target.value }); handleCode(e)}
                  }
                />
              </div>
              <button
                className="contBtn"
                disabled={ btns.code ? false : true }
                onClick={() => setLineColor({ third: true })}
              >
                Continue
              </button>
              <p>
                Didn't receive the email? <span>Resend again</span>
              </p>
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

        //   SET NEW PASSWORD
        ) : lineColor.third ? (
          <div className="ForgotNewPass">
            <div className="npImg">
              <RiKeyboardFill />
            </div>
            <h2 className="title">Set new password</h2>
            <p className="littleInfo">Must be at least 8 characters.</p>
            <div className="npContainer">
              <p>Password</p>
              <input
                placeholder="*********"
                name="nPass"
                onChange={(e) => { handlePassword(e); setPass({...pass, nPass : e.target.value}); }}
              />
              <span>{err.newPassErr}</span>
              <p>Confirm password</p>
              <input
                placeholder="*********"
                name="nConfPass"
                onChange={(e) => { handlePassEqual(e); setPass({...pass, nConfPass : e.target.value}); }}
              />
              <span>{err.newConfPassErr}</span>
              <button
                onClick={() => setLineColor({ fourth: true })} disabled={btns.newPass ? false : true}>
                Reset Password
              </button>
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
        //   PROCESS IS DONE
        ) : (
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
        )}
        <div className="lines">
          <p
            style={{
              backgroundColor: lineColor.first ? "blue" : "var(--borderGray)",
            }}
          ></p>
          <p
            style={{
              backgroundColor: lineColor.second ? "blue" : "var(--borderGray)",
            }}
          ></p>
          <p
            style={{
              backgroundColor: lineColor.third ? "blue" : "var(--borderGray)",
            }}
          ></p>
          <p
            style={{
              backgroundColor: lineColor.fourth ? "blue" : "var(--borderGray)",
            }}
          ></p>
        </div>
      </div>
      <div className="bgImg">
        <img alt="forgot-background" src={bg} />
      </div>
    </div>
  );
}
