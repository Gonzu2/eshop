import "./css/home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [imageSelectedIndex, setImageSelectedIndex] = useState(1);

  function goToLeft() {
    setImageSelectedIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : 3));
  }

  function goToRight() {
    setImageSelectedIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1));
  }

  return (
    <div className="home-wrapper">
      <ul className="home-categories-wrapper">
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
      </ul>
    </div>
  );
}

export default Home;
