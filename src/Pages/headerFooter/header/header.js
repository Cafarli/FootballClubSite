import { useState } from "react";
import "./header.css";
import logo from "../logo.png";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export function Header() {
  const [show, setShow] = useState(false);
  const [showClub, setShowClub] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [dropdowns, setDrops] = useState({
    standings: false,
    club: false,
    lang: false,
  });
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const showDropdownClub = (e) => {
    setShowClub(!showClub);
  };
  const hideDropdownClub = (e) => {
    setShowClub(false);
  };
  const showDropdownLang = (e) => {
    setShowLang(!showLang);
  };
  const hideDropdownLang = (e) => {
    setShowLang(false);
  };
  const toggleMenu = () => document.body.classList.toggle("open");

  return (
    <Navbar
      onMouseEnter={(e) => e.preventDefault()}
      className="header"
      expand="md"
    >
      <Container className="headerContainer">
        <Navbar.Brand className="menuBtn" onClick={toggleMenu}>
          <FiMenu color="white" />
        </Navbar.Brand>
        {/* {buger menu */}
        <div className="burgerMenu">
          <ul className="menuItems">
            <li
              className="nav-item">
              <Link to="/squad">SQUAD</Link>
            </li>
            <li
              className="nav-item"
              onClick={() =>
                setDrops({
                  standings: !dropdowns.standings,
                })
              }
            >
              CALENDAR {dropdowns.standings?<MdOutlineKeyboardArrowUp/> :<MdOutlineKeyboardArrowDown/>}
            </li>
           {dropdowns.standings && <ul>
              <li className="subitem">
                <Link to="/standings">STANDINGS</Link>
              </li>
              <li className="subitem">
                <Link to="/matches">MATCHES</Link>
              </li>
            </ul>}

            <li
              className="nav-item">
              <Link to="/shop">SHOP</Link>
            </li>

            <li
              className="nav-item">
              <Link to="/news">NEWS</Link>
            </li>

            <li
              className="nav-item"
              onClick={() =>
                setDrops({
                  club: !dropdowns.club,
                })
              }
            >
              CLUB{dropdowns.club ?<MdOutlineKeyboardArrowUp/> :<MdOutlineKeyboardArrowDown/>}
            </li>
            {dropdowns.club && (
              <ul>
                <li className="subitem">
                <Link
                  to="/about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  ABOUT
                </Link></li>
                <li className="subitem">
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
        <Navbar.Brand
          href="/"
          className="logo-brand justify-content-start"
          style={{ display: "flex" }}
        >
          <img src={logo} className="header-logo" alt="brand" />
        </Navbar.Brand>
        {/* expanded header */}
        <div id="responsive-navbar-nav " className="first-collapse">
          <Nav className="ms-auto fc-items" defaultActiveKey="#home">
            <Nav.Item>
              <Link to="/squad">SQUAD</Link>
            </Nav.Item>

            <NavDropdown
              title="STANDINGS"
              className="nav-dropdown nav-item"
              show={show}
            >
              <NavDropdown.Item className="item st">
                <Link to="/standings">STANDINGS</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="item  mt">
                <Link to="/matches">MATCHES</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Link to="/shop">SHOP</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/news">NEWS</Link>
            </Nav.Item>

            <NavDropdown
              title="CLUB"
              className="nav-dropdown nav-item show"
              show={showClub}
              onClick={showDropdownClub}
            >
              <NavDropdown.Item className="item ab">
                <Link
                  to="/about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  ABOUT
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="item cnt">
                <Link to="/contact">CONTACT</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>

        <Navbar.Collapse className="second-collapse">
          <Nav.Item>
            <Link to="/login">LOGIN</Link>
          </Nav.Item>
          <NavDropdown
            title={<IoLanguageOutline />}
            className="nav-dropdown nav-item lang"
            show={showLang}
            onMouseEnter={showDropdownLang}
            onMouseLeave={hideDropdownLang}
          >
            <NavDropdown.Item className="item az">
              <Link to="/az" spy={true} smooth={true} offset={0} duration={500}>
                AZ
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="item eng">
              <Link to="/eng">ENG</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
