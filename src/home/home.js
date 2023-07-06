import "./home.css";
import { NewsCard } from "../news/news_card/news_card";
import { StandingTable } from "../table/table";
import { ShopCard } from "../shop/shopCard/shopCard";
import { AiOutlineRight } from "react-icons/ai";
import photo from "./photo.jpg";
import logo from "./logo.png";
import { Container, Row } from "react-bootstrap";
import data from "../shopClothing.json";
import galery from "../galeryPhotos/galeryPhotos.json";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

export function Home() {
  return (
    <Container className="Home">
      <Row>
        <div className="photos-slider">
          <img className="photo" src={photo} alt="newsphoto"></img>
          <Link to={`news/newsCardTitle/`}>
            <div className="read-more">
              <div className="more-text">READ MORE</div>
              <div className="icon">
                <AiOutlineRight />
              </div>
            </div>
          </Link>
        </div>
      </Row>

      <Row>
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
              <StandingTable width={"100%"} teamSize={5}  wdt={"100%"} logoColWdt={"14%"}/>
            </div>
        </div>
      </Row>

      <Row>
        <div className="homeNews">
          <div className="Hpart-title" style={{ display: "block" }}>
            <h1>NEWS</h1>
          </div>
          <Swiper
            loop={true}
            grabCursor={true}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={25}
            breakpoints={{
              370: { slidesPerView: 2 },
              450: { slidesPerView: 3 },
              640: { slidesPerView: 3.5 },
              980: { slidesPerView: 4.5 },
            }}
            slidesPerView={4.5}
          >
            {data.kits &&
              data.kits.length > 0 &&
              data.kits.map((filteredItem) => {
                return (
                  <SwiperSlide>
                    <NewsCard width={"100%"} key={filteredItem.id} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </Row>

      <Row>
        <div className="homeShop">
          <div className="Hpart-title" style={{ display: "block" }}>
            <h1>SHOP</h1>
          </div>
          <Swiper
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            breakpoints={{
              370: { slidesPerView: 2 },
              450: { slidesPerView: 3 },
              700: { slidesPerView: 3.5, spaceBetween: 30 },
              980: { slidesPerView: 4 },
            }}
            slidesPerView={4}
          >
            {data.kits &&
              data.kits.length > 0 &&
              data.kits
                .filter((item, index) => index < 5)
                .map((filteredItem) => {
                  return (
                    <SwiperSlide>
                      <ShopCard
                        props={filteredItem}
                        key={filteredItem.id}
                        width="100%"
                      />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
      </Row>

      <Row>
        <div className="galery">
          <div className="Hpart-title" style={{ display: "block" }}>
            <h1>PHOTOS</h1>
          </div>
          <Swiper
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            breakpoints={{
              370: { slidesPerView: 2 },
              450: { slidesPerView: 3 },
              700: { slidesPerView: 3.5, spaceBetween: 30 },
              980: { slidesPerView: 4 },
            }}
            slidesPerView={4}
          >
            {galery.images &&
              galery.images.length > 0 &&
              galery.images
                .filter((item, index) => index < 5)
                .map((filteredItem) => {
                  return (
                    <SwiperSlide>
                      <img
                        className="slideImage"
                        src={filteredItem.photo}
                        alt="slides"
                      ></img>
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
      </Row>
    </Container>
  );
}
