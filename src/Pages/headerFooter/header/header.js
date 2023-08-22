import { useState } from "react";
import "./header.css";
import logo from "../logo.png";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";

export function Header() {
  const [dropdowns, setDrops] = useState({
    standings: false,
    club: false,
    lang: false,
    settings: false,
  });
  const [icon, setIcon] = useState(true);

  const toggleMenu = () => document.body.classList.toggle("open");

  const cartCount = useSelector((state) =>state.all.products);

  return (
    <Navbar
      onMouseEnter={(e) => e.preventDefault()}
      className="header"
      expand="md"
    >
      <Container className="headerContainer">
        <Navbar.Brand className="menuBtn" onClick={toggleMenu}>
          {icon ? (
            <FiMenu color="white" onClick={() => setIcon(false)} />
          ) : (
            <MdOutlineClose color="white" onClick={() => setIcon(true)} />
          )}
        </Navbar.Brand>
        {/* {buger menu */}
        <div className="burgerMenu">
          <ul className="menuItems">
            <li className="nav-item">
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
              CALENDAR{" "}
              {dropdowns.standings ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </li>
            {dropdowns.standings && (
              <ul>
                <li className="subitem">
                  <Link to="/standings">STANDINGS</Link>
                </li>
                <li className="subitem">
                  <Link to="/matches">MATCHES</Link>
                </li>
              </ul>
            )}

            <li className="nav-item">
              <Link to="/shop">SHOP</Link>
            </li>

            <li className="nav-item">
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
              CLUB
              {dropdowns.club ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
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
                  </Link>
                </li>
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

        {/* EXPANDED HEADER */}
        <div id="responsive-navbar-nav " className="first-collapse">
          <Nav className="ms-auto fc-items" defaultActiveKey="#home">
            <Nav.Item>
              <Link to="/squad">SQUAD</Link>
            </Nav.Item>

            <NavDropdown
              title="STANDINGS"
              className="nav-dropdown nav-item"
              show={dropdowns.standings}
              onMouseEnter={() =>
                setDrops({
                  standings: !dropdowns.standings,
                })
              }
              onMouseLeave={() =>
                setDrops({
                  standings: !dropdowns.standings,
                })
              }
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
              show={dropdowns.club}
              onMouseEnter={() =>
                setDrops({
                  club: !dropdowns.club,
                })
              }
              onMouseLeave={() =>
                setDrops({
                  club: !dropdowns.club,
                })
              }
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
          {/* AFTER LOGINED */}
          <Nav.Item className="basket">
            <Link to="cart" >
              <BiShoppingBag />
            </Link>
              <span>{cartCount.length-1 > 0 ? cartCount.length-1 : ""}</span> 
          </Nav.Item>
          {/* <NavDropdown
            title={<IoSettingsSharp/>}
            className="nav-dropdown nav-item setting"
            show={dropdowns.settings}
            onMouseEnter={()=>setDrops({
              settings: !dropdowns.settings,
            })}
            onMouseLeave={()=>setDrops({
              settings: !dropdowns.settings,
            })}
          >
            <NavDropdown.Item className="item">
              <Link>
              MY ACCOUNT
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="item">
              <Link>
              LEAVE
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="item"></NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown
            title={<IoLanguageOutline />}
            className="nav-dropdown nav-item lang"
            show={dropdowns.lang}
            onMouseEnter={() =>
              setDrops({
                lang: !dropdowns.lang,
              })
            }
            onMouseLeave={() =>
              setDrops({
                lang: !dropdowns.lang,
              })
            }
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
