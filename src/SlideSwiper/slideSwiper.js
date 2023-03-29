import { Swiper, SwiperSlide } from "swiper/react";
import "./slideSwiper.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function SlideSwiper(props) {
  const images = [];
  {
    props.props.images.map((item) => {
      images.push(item.photo);
    });
  }
  return (
    <div className="slides">
      <Swiper
        // effect={"coverflow"}
        // centeredSlides={true}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        // modules={[EffectCoverflow, Pagination, Autoplay]}
        // className="mySwiper"
        // slidesPerView={3}

        loop={true}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide>
          <img className="slideImage" src={images[0]} alt="slides"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slideImage" src={images[1]} alt="slides"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slideImage" src={images[2]} alt="slides"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slideImage" src={images[3]} alt="slides"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slideImage" src={images[4]} alt="slides"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slideImage" src={images[5]} alt="slides"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
