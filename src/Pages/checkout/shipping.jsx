import "./shipping.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

export function Shipping(props) {
  const [value, setValue] = useState("post")
  return (
    <div className="shipping">
      {/* Style is in "checkout.css" page */}
      <p className="ch-title">Çatdırılma Yolları</p>
      <div className="shippingMethods">
        <div className="shipMthds s-cargo">
          <label>
            <input type="radio" value="post" checked={value==='post'} onChange={()=>setValue('post')} /> Poçtla çatdırılma
          </label>
        </div>
        <div className="shipMthds s-cargo">
          <label>
            <input type="radio" value="cargo" checked={value==='cargo'} onChange={()=>setValue('cargo')} />
            Kargo ilə çatdırılma
          </label>
        </div>
      </div>
      {/* Style is in "checkout" stylesheet */}
      <div className="chckBtns">
        <Link>
          <button className="cb-returnCart">
            <MdKeyboardArrowLeft /> İnformasiya 'ya dön
          </button>
        </Link>
        <button className="cb-contShip" onClick={props.change}>
          Davam et
        </button>
      </div>
    </div>
  );
}
