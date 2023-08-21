import "./checkout.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Information } from "./information";
import { Shipping } from "./shipping";
import { Payment } from "./payment";
import { CheckCart } from "./checkCart";

export function Checkout() {
  const [show, setShow] = useState({
    info: true,
    shipping: false,
    payment: false,
  });
  return (
    <div className="checkout">
      <div className="checkoutForm">
        <div className="ch-paths">
          <p>
            <Link to='/səbət'>Cart</Link> <MdKeyboardArrowRight />{" "}
            <span style={{color: show.info? "black" : "var(--grayMiddle)"}} onClick={() => setShow({ info: true })}>Informasiya</span>{" "}
            <MdKeyboardArrowRight />{" "}
            <span style={{color: show.shipping? "black" : "var(--grayMiddle)"}} onClick={() => setShow({ shipping: true })}>Çatdırılma</span>{" "}
            <MdKeyboardArrowRight />{" "}
            <span style={{color: show.payment? "black" : "var(--grayMiddle)"}} onClick={() => setShow({ payment: true })}>Ödəniş</span>
          </p>
        </div>

        <div className="ch-sections">
          {show.info? <Information change={()=>setShow({shipping:true})} /> :
          show.payment ? <Payment/> :
          show.shipping ? <Shipping change={()=>setShow({payment:true})} /> :
          null
          }
        </div>
      </div>
      <div className="shopDetails">
        <CheckCart />
      </div>
    </div>
  );
}
