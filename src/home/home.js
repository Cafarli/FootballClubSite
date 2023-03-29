import "./home.css";
import { Footer } from "../headerFooter/footer/footer";
import { NewsCard } from "../news/news_card/news_card";
import { StandingTable } from "../table/table";
import { ShopCard } from "../shop/shopCard/shopCard";
import { AiOutlineRight } from "react-icons/ai";
import photo from "./photo.jpg";
import logo from "./logo.png";
import { Container, Row, Col } from "react-bootstrap";
import data from "../shopClothing.json";
import galery from "../galeryPhotos/galeryPhotos.json";
import { SlideSwiper } from "../SlideSwiper/slideSwiper";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { height } from "@mui/system";

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
          <Row>
            <Col>
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
                    FC JABRAYIL
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
            </Col>

            <Col>
              <StandingTable width={"100%"} wdt={"100%"} logoColWdt={"12%"} />
            </Col>
          </Row>
        </div>
      </Row>

      <Row>
        <div className="part-title" style={{ display: "block" }}>
          <h1>NEWS</h1>
        </div>
        <div style={{ display: "block" }}>
          <NewsCard width={"21.5%"} />
          <NewsCard width={"21.5%"} />
          <NewsCard width={"21.5%"} />
          <NewsCard width={"21.5%"} />
        </div>
      </Row>

      <Row>
        <div className="homeShop">
          <h1>SHOP</h1>
          <Swiper
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
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
          <h1>PHOTOS</h1>
          <SlideSwiper props={galery} />
        </div>
      </Row>

    </Container>
  );
}
