import "./css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  function goToLeft() {
    console.log("Going left");
  }

  function goToRight() {
    console.log("Goint right");
  }

  return (
    <div className="home-wrapper">
      <div className="home-category-switch">
        <button onClick={goToLeft}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={goToRight}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <ul className="home-categories-wrapper">
        <li className="home-category home-category-equipment">
          <div className="home-category-title">Gym equipment</div>
        </li>
        <li className="home-category home-category-clothes">
          <div className="home-category-title">Clothes</div>
        </li>
        <li className="home-category home-category-supplements">
          <div className="home-category-title">Supplements</div>
        </li>
      </ul>
    </div>
  );
}

export default Home;
