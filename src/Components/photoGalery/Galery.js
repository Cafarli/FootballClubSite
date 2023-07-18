import "./Galery.css";
import { Modal } from "react-bootstrap";
import galery from "../../Data/galeryPhotos.json";
import { IoIosClose } from "react-icons/io";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function Galery(props) {
  const data = galery.images.filter((images) => images.id === props.id)[0];
  return (
    <Modal
      dialogClassName="galery"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      animation={false}
      size="lg"
      centered
    >
      <Modal.Body className="galery-body">
        <div className="galery-close" onClick={props.onHide}>
          <IoIosClose />
        </div>
        <Swiper navigation={true} modules={[Navigation]}>
         {data.photo &&
           !!data.photo.length &&
           data.photo.map((img, index) => {
             return (
               <SwiperSlide key={index}>
                 <div className="galeryImg">
                   <img alt="galery" src={img} />
                 </div>
               </SwiperSlide>
             );
           })}
       </Swiper>
      </Modal.Body>
    </Modal>
  );
}
