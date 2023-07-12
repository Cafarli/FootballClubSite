import { useState } from "react";
import "./header.css";
import logo from "../logo.png";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";


export function Header() {
  const [expand, updateExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const [showClub, setShowClub] = useState(false);
  const [showLang, setShowLang] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const showDropdownClub = (e)=>{
      setShowClub(!showClub);
    }
    const hideDropdownClub = e => {
      setShowClub(false);
    }
    const showDropdownLang = (e)=>{
      setShowLang(!showLang);
    }
    const hideDropdownLang = e => {
      setShowLang(false);
    }

  return (
    <Navbar onMouseEnter={(e)=> e.preventDefault()} className="header" expanded={expand} fixed="top" expand="md">
      <Container>
        <Navbar.Brand
          href="/"
          className="logo-brand justify-content-start"
          style={{ display: "flex" }}
        >
          <img src={logo} className="img-fluid header-logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav justify-content-end"
          className="first-collapse"
          style={{ display: "flex" }}
        >
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link
                to="/"
              >
                HOME
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="/squad"
              >
                SQUAD
              </Link>
            </Nav.Item>

            <NavDropdown title="STANDINGS" className="nav-dropdown nav-item"
              show={show}
              onMouseEnter={showDropdown} 
              onMouseLeave={hideDropdown}>
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

            <NavDropdown title="CLUB" className="nav-dropdown nav-item show"
              show={showClub}
              onMouseEnter={showDropdownClub} 
              onMouseLeave={hideDropdownClub}>
              <NavDropdown.Item className="item ab">
                <Link to="/about" spy={true} smooth={true} offset={0} duration={500}>ABOUT</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="item cnt">
                <Link to="/contact">CONTACT</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse 
        className="second-collapse">
          <Nav.Item>
            <Link to="/login">LOGIN</Link>
          </Nav.Item>
          <NavDropdown title={<IoLanguageOutline />} className="nav-dropdown nav-item"
              show={showLang}
              onMouseEnter={showDropdownLang} 
              onMouseLeave={hideDropdownLang}>
              <NavDropdown.Item className="item az">
                <Link to="/az" spy={true} smooth={true} offset={0} duration={500}>AZ</Link>
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