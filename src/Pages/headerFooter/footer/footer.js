import React from "react";
import "./footer.css";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="Footer">
      <div className="social-medias">
        <div className="home-logo">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>
        <div className="medias">
          <ul>
            <li className="medias-li">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </li>
            <li className="medias-li">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </li>
            <li className="medias-li">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </li>
            <li className="medias-li">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </li>
          </ul>
        </div>
      </div>

      <div className="club-info">
        <p>
          Proin lacinia venenatis lacus a facilisis. Sed nisl lorem, suscipit
          non laoreet blandit, hendrerit elementum purus. Vivamus elementum leo
          urna, quis iaculis lectus mollis vitae.Sed pretium lacinia arcu vitae
          facilisis. Curabitur eu ligula vel erat tempus tristique sit amet
          tincidunt nulla. Donec semper condimentum nunc, maximus sollicitudin
          velit cursus ac. Etiam sagittis est a malesuada tempus.
        </p>
      </div>

      <div className="policies">
        <ul>
          <li className="policies-li">Legal Notice &#8226;</li>
          <li className="policies-li">Privacy Policy &#8226;</li>
          <li className="policies-li">Cookies Policy &#8226;</li>
          <li className="policies-li">Notification management &#8226;</li>
          <li className="policies-li">Sponsors &#8226;</li>
        </ul>
      </div>

      <div className="copy-rights">
        <p className="copyright">© {new Date().getFullYear()} By JAFARLI</p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
}
