import "./css/home.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Pagination } from "swiper/modules";

import equipmentImage from "../images/equipment.png";
import clothesImage from "../images/clothes.jpg";
import supplementsImage from "../images/supplements.jpg";

function Home() {
  // const [imageSelectedIndex, setImageSelectedIndex] = useState(1);

  // function goToLeft() {
  //   setImageSelectedIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : 3));
  // }

  // function goToRight() {
  //   setImageSelectedIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
  // }

  return (
    <div className="home-wrapper">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={equipmentImage}
            alt="equipment-image"
            className="category-iamge"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={clothesImage}
            alt="clothes-image"
            className="category-iamge"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={supplementsImage}
            alt="supplements-image"
            className="category-iamge"
          />
        </SwiperSlide>
      </Swiper>

      {/* <ul className="home-categories-wrapper">
        <li className="home-category-switch switch-to-left">
          <button onClick={goToLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </li>
        {imageSelectedIndex === 1 ? (
          <li
            className="home-category home-category-equipment"
            data-image-index="1"
          >
            <div className="home-category-title">Gym equipment</div>
          </li>
        ) : (
          <></>
        )}
        {imageSelectedIndex === 2 ? (
          <li
            className="home-category home-category-clothes"
            data-image-index="2"
          >
            <div className="home-category-title">Clothes</div>
          </li>
        ) : (
          <></>
        )}

        {imageSelectedIndex === 3 ? (
          <li
            className="home-category home-category-supplements"
            data-image-index="3"
          >
            <div className="home-category-title">Supplements</div>
          </li>
        ) : (
          <></>
        )}
        <li className="home-category-switch switch-to-right">
          <button onClick={goToRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </li>
      </ul> */}
    </div>
  );
}

export default Home;
