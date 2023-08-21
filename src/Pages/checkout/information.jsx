import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./information.css";

export function Information(props) {
  return (
    <div className="information">
      {/* Style is in "checkout.css" page */}
      <p className="ch-title">Çatdırlma ünvanı</p>
      <div className="infoPart i-region">
        <label className="regionSelect spLabel" htmlFor="regionSelect">
          <span>Rayonlar</span>
        </label>
        <select name="Region" id="regionSelect">
          <option>Ağdaş</option>
          <option>Bakı</option>
          <option>Cəbrayıl</option>
          <option>Şəki</option>
        </select>
      </div>
      <div className="infoPart i-fullname">
        <label className="name spLabel" htmlFor="nameInput">
          <span>Adınız</span>
        </label>
        <input id="nameInput" className="nameInput" type="text" required />
        <label className="surname spLabel" htmlFor="surnameInput">
          <span>Soyadınız</span>
        </label>
        <input
          id="surnameInput"
          className="surnameInput"
          type="text"
          required
        />
      </div>
      <div className="infoPart i-address">
        <label className="address spLabel" htmlFor="addressInput">
          <span>Adres</span>
        </label>
        <input
          id="addressInput"
          className="addressInput"
          type="text"
          required
        />
      </div>
      <div className="infoPart i-apartment">
        <label className="apartment spLabel" htmlFor="apartmentInput">
          <span>Bina, ev ünvanı (varsa)</span>
        </label>
        <input
          id="apartmentInput"
          className="apartmentInput"
          type="text"
          required
        />
      </div>
      <div className="infoPart i-postal">
        <label className="postal spLabel" htmlFor="postalInput">
          <span>Poçt kodu</span>
        </label>
        <input id="postalInput" className="postalInput" type="text" required />
      </div>
      <div className="saveProcess">
      <input id="saveInfo" type="checkbox" />
      <label htmlFor="saveInfo">Növbəti dəfə üçün yadda saxla</label>
      </div>
      {/* Style is in "checkout" stylesheet */}
      <div className="chckBtns">
        <Link><button className="cb-returnCart"><MdKeyboardArrowLeft/> Səbətə dön</button></Link>
        <button className="cb-contShip" onClick={props.change}>Davam et</button>
      </div>
    </div>
  );
}
