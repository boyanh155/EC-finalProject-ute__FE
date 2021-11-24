import { Link } from "react-router-dom";
import "../../assets/css/home/Hero.css";
import "../../assets/css/home/NavBar.css";
import { SlideBarData,bookSlideBarData } from "./SlideBarData";
import { useState } from "react";

const Navbar = ({ colorMenuChange,colorBookChange }) => {
  // false is close
  const [slideBar, setSlideBar] = useState(false);
  const [bookBar, setBookBar] = useState(false);
  // content
  const [menuDisPlay, setMenuDisPlay] = useState("Menu");
  const [bookDisplay, setBookDisplay] = useState("Book");
  const [priceDisplay, setPriceDisplay] = useState("Price");
  const showSideBar = () => {
    setSlideBar(!slideBar);
    setMenuDisPlay((prev) => {
      if (prev === "Menu") {
        return "Close";
      } else if (prev === "Close") {
        return "Menu";
      }
    });
  };
  const showBookSideBar = () => {
    setBookBar(!bookBar);
    setBookDisplay((prev) => {
      if (prev === "Book") {
        return "Close";
      } else if (prev === "Close") {
        return "Book";
      }
    });
  };
  return (
    <>
      {/* Menu */}
      {/* Button */}
      <Link
        to="#"
        onClick={showSideBar}
        className={
          slideBar ? "hero__bt bt smooth inactiveMenu" : "hero__bt bt smooth"
        }
        style={colorMenuChange}
      >
        <div>
          <span className="hero__bt__text" >
            {menuDisPlay}
          </span>
        </div>
      </Link>
      {/* Item */}
      <nav
        className={
          slideBar ? "nav nav-menu smooth" : "nav nav-menu inactiveClose smooth"
        }
      >
        <ul className="nav nav-menu-list nav__list">
          {SlideBarData.map((item, index) => {
            return (
              <Link key={index} to={item.path} className="link">
                <li className="nav-menu-item nav__item smooth"><span>{item.title}</span></li>
              </Link>
            );
          })}
        </ul>

       </nav>
       {/* Price and Location */}
       {/* <div className="bt price__bt">
         Price&Location
        </div> */}
        {/* Book */}
        {/* Button */}
        <Link
        to="#"
        onClick={showBookSideBar}
        className={
          slideBar ? "book__bt bt smooth inactiveBook" : "book__bt bt smooth"
        }
        style={colorBookChange}
        >
        <div>
          <span className="hero__bt__text" >
            {bookDisplay}
          </span>
        </div>
        </Link>
        {/* Item */}
        <nav
        className={slideBar?(
          bookBar ? "nav nav-book-open smooth" : "nav nav-book-open book-menuOpen smooth"
        ):(
          bookBar ? "nav nav-book-close smooth" : "nav nav-book-close book-menuClose smooth"
        )
        }
      >
        <ul className="nav nav-book-list nav__list">
          {bookSlideBarData.map((item, index) => {
            return (
              <Link key={index} to={item.path} className="link">
                <li className="nav-book-item nav__item smooth"><span>{item.title}</span></li>
              </Link>
            );
          })}
        </ul>

       </nav>
       </>
  );
};

export default Navbar;
