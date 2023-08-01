import React, { useEffect, useState } from "react";
import "./Forgot.css";
import bg from "../../Images/backgroundImages/password.gif";
import ForgotMail from "./forgotMail";
import ForgotCode from "./forgotCode";
import ForgotNewPass from "./forgotNewPass";
import ForgotDone from "./forgotDone";

export default function ForgotPage() {
  const [lineColor, setLineColor] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  
  useEffect(() => {
    const child =
      document.getElementsByClassName("page")[0].children[0]["className"];
    console.log(child);
    if (child === "ForgotMail") {
      setLineColor({ first: true });
    }
    if (child === "ForgotCode") {
      setLineColor({ second: true });
    }
    if (child === "ForgotNewPass") {
      setLineColor({ third: true });
    }
    if (child === "ForgotDone") {
      setLineColor({ fourth: true });
    }
  },[]);

  return (
    <div className="ForgotPage">
      <div className="page">
        <ForgotMail />
        {/* <ForgotCode /> */}
        {/* <ForgotNewPass /> */}
        {/* <ForgotDone /> */}
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
