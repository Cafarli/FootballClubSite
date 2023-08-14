import React, { useEffect, useState } from "react";
import "./Forgot.css";
import bg from "../../Images/backgroundImages/password.gif";
import ForgotMail from "./forgotMail";
import ForgotCode from "./forgotCode";
import ForgotNewPass from "./forgotNewPass";
import ForgotDone from "./forgotDone";

export default function ForgotPage() {
  const [lineColor, setLineColor] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });

  const handleClick = (line, value) => {
    setLineColor({ line: value });
  }
  useEffect(() => {
    console.log('clicked',lineColor);
  //   const child =
  //     document.getElementsByClassName("page")[0].children[0]["className"];
  //   // console.log(child);
  //   switch (child) {
  //     case "ForgotMail":
  //       setLineColor({ first: true });
  //       break;
  //     case "ForgotCode":
  //       setLineColor({ second: true });
  //       break;

  //     case "ForgotNewPass":
  //       setLineColor({ third: true });
  //       break;

  //     case "ForgotDone":
  //       setLineColor({ fourth: true });
  //       break;
  //     default:
  //       break;
    // }
  }, [lineColor]);

  return (
    <div className="ForgotPage">
      <div className="page">
        {lineColor.first ? <ForgotMail setLine={handleClick} /> :
          lineColor.second ? <ForgotCode setLine={handleClick} /> :
             lineColor.third ? <ForgotNewPass setLine={handleClick} /> :
              <ForgotDone setLine={handleClick} />
            
          
        }
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
