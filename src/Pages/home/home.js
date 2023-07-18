import "./home.css";
import { NewsCard } from "../news/news_card/news_card";
import { StandingTable } from "../../Components/table/table";
import logo from "./logo.png";
import { Col, Row } from "react-bootstrap";
import data from "../../Data/shopClothing.json";
import galery from "../../Data/galeryPhotos.json";
import newsData from "../../Data/news.json";
import { Link } from "react-router-dom";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { HomeShopCard } from "./homeShopCard/homeShopCard";
import { Galery } from "../../Components/photoGalery/Galery";
import { useState } from "react";

export function Home() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("0");
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="Home">
      <div className="home-part">
        <div className="home-mainNews">
          <Swiper
            autoplay={{delay: 4000}}
            speed={1000}
            navigation={true}
            loop={true}
            
            modules={[Navigation, Autoplay]}
          >
            {newsData.news &&
              newsData.news.length > 0 &&
              newsData.news
                .filter((n, i) => i < 3)
                .map((news, index) => {
                  return (
                    <SwiperSlide>
                      <div className="hmn-slide" key={index}>
                        <img
                          className="photo"
                          src={news.image}
                          alt="newsphoto"
                        ></img>
                        <div className="hmns-add">
                          <Link
                            className="hmnsa-title"
                            to={`news/newsCardTitle/`}
                          >
                            <div className="hmns-title-text">
                              <p>{news.title}</p>
                            </div>
                          </Link>
                          {/* <Link
                            className="hmnsa-more"
                            to={`news/newsCardTitle/`}
                          >
                            <div className="read-more">
                              <div className="more-text">READ MORE</div>
                              <div className="more-icon">
                                <AiOutlineRight />
                              </div>
                            </div>
                          </Link> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
      </div>

      <div>
        <div className="next-match-info">
          <div className="nmi-nextMatchPart">
            <div className="next-match">
              <h1>
                NEXT <span>MATCH</span>
              </h1>
              <div className="clubs">
                <div className="club first">
                  <img
                    style={{ width: "27%", marginRight: "10%" }}
                    src={logo}
                    alt="logo"
                  ></img>
                  <p>FC JABRAYIL</p>
                </div>
                <div className="club vs">vs</div>
                <div className="club second">
                  FC JABRAYIL
                  <img
                    style={{ width: "27%", marginLeft: "10%" }}
                    src={logo}
                    alt="logo"
                  ></img>
                </div>
              </div>
              <div className="next-date-info">
                <p className="next-date">November 14, 2015 | 12:00 am</p>
                <p className="next-location">Cambridgeshire UK</p>
              </div>
              <div className="all-matches">See calendar</div>
            </div>
          </div>

          <div className="nmi-standingPart">
            <StandingTable
              width={"100%"}
              teamSize={5}
              wdt={"100%"}
              logoColWdt={"14%"}
            />
          </div>
        </div>
      </div>

      <div className="home-part">
        <div className="homeNews">
          {/* <div className="Hpart-title" style={{ display: "block" }}>
            <h1>NEWS</h1>
          </div> */}
          <Row className="hn-allNews">
            {newsData.news &&
              newsData.news.length > 0 &&
              newsData.news
                .filter((n, i) => i < 7)
                .map((news, index) => {
                  return (
                    <Col xs={12} sm={12} md={6}>
                      <NewsCard width={"90%"} key={index} data={news} />
                    </Col>
                  );
                })}
          </Row>
        </div>
      </div>

      <div className="home-part">
        <Row className="homeShop">
          {/* <div className="Hpart-title" style={{ display: "block" }}>
            <h1>SHOP</h1>
          </div> */}
          {data.kits &&
            data.kits.length > 0 &&
            data.kits
              .filter((item, index) => index < 3)
              .map((filteredItem) => {
                return (
                  <Col xs={12} sm={12} md={4} xl={4} lg={4}>
                    <HomeShopCard props={filteredItem} key={filteredItem.id} />
                  </Col>
                );
              })}
        </Row>
      </div>

      <div className="home-part hgalery">
        <div className="hpg-row">
          {/* <div className="Hpart-title" style={{ display: "block" }}>
            <h1>PHOTOS</h1>
          </div> */}

          {galery.images &&
            galery.images.length > 0 &&
            galery.images
              .map((filteredItem, ind) => {
                return (
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    xl={4}
                    lg={4}
                    key={ind}
                    className="hpgr-imgcol"
                  >
                    <img
                      className="slideImage"
                      src={filteredItem.photo[0]}
                      id={filteredItem.id}
                      alt="slides"
                      onClick={(e) => {
                        setId(e.target.id);
                        setModalShow(true);
                      }}
                    />

                    <Galery
                      show={modalShow}
                      id={id}
                      onHide={() => setModalShow(false)}
                    />
                  </Col>
                );
              })}
        </div>
      </div>
    </div>
  );
}
