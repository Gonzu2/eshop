import "./css/navbar.css";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openedBefore, setOpenedBefore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth((prevWidth) => {
        const newWidth = window.innerWidth;
        if (prevWidth !== newWidth) {
          return newWidth;
        }
        return prevWidth;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setOpenedBefore(true);
    setMenuOpen(!menuOpen);
  };

  const screenWidthBelow1420 = windowWidth < 1420;
  const translateValue = menuOpen && screenWidthBelow1420 ? "0%" : "-100%";

  const menuStyles = {
    right: translateValue,
  };

  return (
    <>
      <nav
        className="navbar-wrapper"
        style={{
          position: menuOpen ? "fixed" : "relative",
          top: "0%",
          zIndex: "10",
        }}
      >
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="navbar-items-list" style={menuStyles}>
          <li className="navbar-item">
            <p>New & Featured</p>
          </li>
          <li className="navbar-item">
            <p>Supplements</p>
          </li>
          <li className="navbar-item">
            <p>Barbells</p>
          </li>
          <li className="navbar-item">
            <p>Plates</p>
          </li>
          <li className="navbar-item">
            <p>Clothes</p>
          </li>
        </ul>

        <ul className="navbar-buttons">
          <li className="navbar-button">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M0 14.9779C0 23.2408 6.72236 29.9558 14.9779 29.9558C18.7813 29.9558 22.2604 28.5258 24.9066 26.1818L34.4521 35.7273C34.629 35.9042 34.8575 35.9926 35.0934 35.9926C35.3292 35.9926 35.5577 35.9042 35.7346 35.7273C36.0885 35.3735 36.0885 34.8059 35.7346 34.4521L26.1818 24.9066C28.5258 22.2604 29.9558 18.7887 29.9558 14.9779C29.9558 6.71499 23.2334 0 14.9779 0C6.72236 0 0 6.71499 0 14.9779ZM28.1499 14.9779C28.1499 22.2383 22.2383 28.1499 14.9779 28.1499C7.71744 28.1499 1.8059 22.2383 1.8059 14.9779C1.8059 7.71744 7.71744 1.8059 14.9779 1.8059C22.2383 1.8059 28.1499 7.71007 28.1499 14.9779Z"
                fill="#F3F0ED"
              />
            </svg>
          </li>
          <li className="navbar-button">
            <svg
              width="36"
              height="42"
              viewBox="0 0 36 42"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bag">
                <path
                  id=" "
                  d="M33.9972 11.2182C33.9829 11.0003 33.869 10.7952 33.6791 10.6453C33.4892 10.4954 33.2376 10.412 32.9763 10.4123H27.6984V9.06063C27.6984 7.9967 27.4475 6.94319 26.9601 5.96024C26.4727 4.9773 25.7584 4.08417 24.8578 3.33186C23.9572 2.57955 22.8881 1.98278 21.7114 1.57563C20.5347 1.16848 19.2736 0.958923 18 0.958923C16.7264 0.958923 15.4653 1.16848 14.2886 1.57563C13.1119 1.98278 12.0428 2.57955 11.1422 3.33186C10.2416 4.08417 9.52725 4.9773 9.03986 5.96024C8.55247 6.94319 8.30161 7.9967 8.30161 9.06063V10.4294H3.01855C2.75725 10.4291 2.50574 10.5124 2.31582 10.6624C2.1259 10.8123 2.01204 11.0173 1.99766 11.2353L0.00183941 40.1371C-0.00652351 40.2533 0.0136912 40.3697 0.0612376 40.4792C0.108784 40.5886 0.182655 40.6888 0.278299 40.7735C0.373944 40.8582 0.489334 40.9256 0.617363 40.9716C0.745391 41.0176 0.883344 41.0413 1.02272 41.0411H34.9773C35.1167 41.0413 35.2546 41.0176 35.3826 40.9716C35.5107 40.9256 35.6261 40.8582 35.7217 40.7735C35.8173 40.6888 35.8912 40.5886 35.9388 40.4792C35.9863 40.3697 36.0065 40.2533 35.9982 40.1371L33.9972 11.2182ZM10.3434 9.06063C10.3434 8.22069 10.5414 7.38896 10.9262 6.61296C11.311 5.83695 11.875 5.13185 12.586 4.53792C13.2969 3.94398 14.141 3.47285 15.0699 3.15142C15.9989 2.82999 16.9945 2.66455 18 2.66455C19.0055 2.66455 20.0011 2.82999 20.9301 3.15142C21.859 3.47285 22.7031 3.94398 23.414 4.53792C24.125 5.13185 24.689 5.83695 25.0738 6.61296C25.4586 7.38896 25.6566 8.22069 25.6566 9.06063V10.4294H10.3434V9.06063ZM2.10486 39.3354L3.98328 12.118H8.30161V19.6099C8.30161 19.8361 8.40917 20.053 8.60063 20.2129C8.79208 20.3729 9.05174 20.4627 9.3225 20.4627C9.59325 20.4627 9.85292 20.3729 10.0444 20.2129C10.2358 20.053 10.3434 19.8361 10.3434 19.6099V12.118H25.6566V19.6099C25.6566 19.8361 25.7642 20.053 25.9556 20.2129C26.1471 20.3729 26.4067 20.4627 26.6775 20.4627C26.9483 20.4627 27.2079 20.3729 27.3994 20.2129C27.5908 20.053 27.6984 19.8361 27.6984 19.6099V12.118H32.0371L33.8951 39.3354H2.10486Z"
                  fill="#F3F0ED"
                />
              </g>
            </svg>
          </li>

          <li className="navbar-button navmenu" onClick={handleMenuToggle}>
            <ul
              className={`nav-menu-icon ${
                menuOpen ? "menu-open" : openedBefore ? "menu-closed" : ""
              }`}
            >
              <li className="nav-menu-icon-bar"></li>
              <li className="nav-menu-icon-bar"></li>
              <li className="nav-menu-icon-bar"></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: menuOpen ? "block" : "none",
          width: "100vw",
          height: "100px",
        }}
      ></div>
      <div
        className={`nav-menu-canvas ${
          menuOpen
            ? "nav-menu-canvas-open"
            : openedBefore
            ? "nav-menu-canvas-closed"
            : ""
        }`}
      >
        <ul className="nav-menu-canvas-items">
          <li className="nav-menu-canvas-item">
            <p>New & Featured</p>
          </li>
          <li className="nav-menu-canvas-item">
            <p>Supplements</p>
          </li>
          <li className="nav-menu-canvas-item">
            <p>Barbells</p>
          </li>
          <li className="nav-menu-canvas-item">
            <p>Plates</p>
          </li>
          <li className="nav-menu-canvas-item">
            <p>Clothes</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
