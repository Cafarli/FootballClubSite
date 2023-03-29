import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";
import "./contact.css";
import { HashLoader  } from "react-spinners";

export function Contact() {

  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, []);

  return (
    <div className="totalSpinner">
      {loading ? 
      <div className="spinner">
          <HashLoader  color="#36d7b7" loading={loading}  />
      </div>
    :
      
    <Container className="contactInfo">

      <Row>
          <div className="contact-header">
              <h1>CONTACT</h1>
          </div>
      </Row>
      <Row style={{margin:0, paddingTop: "3%"}} className='contact-types'>
        <Col md={4}>
          <div className="club contact">
            <p className="contact-title ">Club Contact</p>
            <p className="phone-num">
              <BsFillTelephoneFill className="icons" />
              (846)-356-9322
            </p>
            <p className="email-contact">
              <MdEmail className="icons" />
              <a href="mailto: fcj@gmail.com">fcj@gmail.com</a>
            </p>
            <p className="address-contact">
              <MdLocationOn className="icons" />
              9478 Chestnut Street, Woodstock, GA 30188
            </p>
          </div>
        </Col>

        <Col md={4}>
          <div className="mediaInfo contact">
            <p className="contact-title">Media Contact</p>
            <p className="phone-num">
              <BsFillTelephoneFill className="icons" />
              (846)-356-9322
            </p>
            <p className="email-contact">
              <MdEmail className="icons" />
              <a href="mailto: fcj@gmail.com">fcj@gmail.com</a>
            </p>
            <p className="address-contact">
              <MdLocationOn className="icons" />
              9478 Chestnut Street, Woodstock, GA 30188
            </p>
          </div>
        </Col>

        <Col md={4}>
          <div className="head contact">
            <p className="contact-title">Head Office Contact</p>
            <p className="phone-num">
              <BsFillTelephoneFill className="icons" />
              (846)-356-9322
            </p>
            <p className="email-contact">
              <MdEmail className="icons" />
              <a href="mailto: fcj@gmail.com">fcj@gmail.com</a>
            </p>
            <p className="address-contact">
              <MdLocationOn className="icons" />
              9478 Chestnut Street, Woodstock, GA 30188
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="social-medias">
            <ul>
              <li className="smedias-li">
                <a href=""><SiFacebook style={{ fontSize: "25px" }} /></a>
              </li>
              <li className="smedias-li">
              <a href=""><SiInstagram style={{ fontSize: "25px" }} /></a>
              </li>
              <li className="smedias-li">
              <a href=""><SiTwitter style={{ fontSize: "25px" }} /></a>
              </li>
              <li className="smedias-li">
              <a href=""><SiYoutube style={{ fontSize: "25px" }} /></a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.0092889680832!2d47.02402831159521!3d39.39875143133412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403d966480f1cbf7%3A0xf86a4f1ed399bffe!2sJabrayil%2C%20Azerbaijan!5e1!3m2!1sen!2s!4v1671827208175!5m2!1sen!2s"
            style={{
              frameborder: "0",
              allowfullscreen: "",
              ariaHidden: "false",
              tabindex: "0",
            }}
          ></iframe>
        </div>
      </Row>
    </Container>
    }
    </div>
  );
}
