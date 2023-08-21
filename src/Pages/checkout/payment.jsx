import "./payment.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

export function Payment(props) {
  const [value, setValue] = useState("card")

  return (
    <div className="payment">
      {/* Style is in "checkout.css" page */}
      <p className="ch-title">Ödəniş Yolları</p>
      <div className="paymentMethods">
        <div className="payMthds p-cargo">
          <label>
            <input type="radio" value="cargo" checked={value==='card'} onChange={()=>setValue('card')} />
            Kartla ödəniş
          </label>
        </div>
        <div className="payMthds p-cargo">
          <label>
            <input type="radio" value="post" checked={value==='cash'} onChange={()=>setValue('cash')} /> Çatdırılma zamanı nağd ödəniş
          </label>
        </div>
      </div>
      {/* Style is in "checkout" stylesheet */}
      <div className="chckBtns">
        <Link>
          <button className="cb-returnCart">
            <MdKeyboardArrowLeft /> Çatdırılma 'ya dön
          </button>
        </Link>
        <button className="cb-contShip" onClick={props.change}>
          Sifarişi tamamla
        </button>
      </div>
    </div>
  );
}
