import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import "../../assets/css/common/header.css";
import location from "../../assets/common/location.png";
import phone from "../../assets/common/phone.png";
import student from "../../assets/common/student.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useWindowScroll } from "react-use";
const HeaderWrapper = styled.div`
  width: 100%;
  height: 186px;
  position: fixed;
  z-index: 9999999999999;
  over-flow: hidden;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.132) 25%,
        rgba(0, 0, 0, 0.22) 45.31%,
        rgba(0, 0, 0, 0.62) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
    // background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 9999;
    transition: 0.3s all linear;
  }
  &:hover::before {
    transition: 0.3s all linear;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const StudentIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 6px;
  }
`;
const items = [];
const Header = ({ scrollY }) => {
  const wordLogo = useRef();
  const navBar = useRef();
  const overlayHeader = useRef();
  const contactSection = useRef();
  const { y:scrollVar } = useWindowScroll();
  const y = scrollY || scrollVar;
  //false is big size
  const [headerState, setHeaderState] = useState(false);
  //left site item - icon

  useEffect(() => {
    console.log(`y:${scrollVar}`);

    if (y > 10) {
      setHeaderState(true);
      wordLogo.current.style.fontSize = 100 - y / 10 + "px";
      wordLogo.current.style.transform = `translateY(${14 - y / 5}px)`;
      if (y < 581) {
        navBar.current.style.transform = `translateY(${14 - y / 5}px)`;
        setHeaderState(false);
      } else {
        navBar.current.style.transform = `translateY(-100px)`;
        setHeaderState(true);
      }
    } else if (y < 11) {
      setHeaderState(false);
    }
  }, [y]);
  useEffect(() => {
    if (!headerState) {
    } else {
      const mouseOverEvent = new Event("mouseover");
      overlayHeader.current.dispatchEvent(mouseOverEvent);
    }
  }, [headerState]);
  //check header

  return (
    <div>
      <HeaderWrapper
        ref={overlayHeader}
        className={headerState ? "headerWrapperMinimize" : ""}
      >
        <div className="header">
          <div className="header__left" ref={contactSection}>
            <div className="iconHeroWrapper location">
              <LazyLoadImage
                className="icon"
                src={location}
                width="18px"
                height="32px"
                alt="icon"
              />
              <span>HCM City</span>
            </div>
            <div
              className={
                headerState
                  ? "iconHeroWrapper phone phone-open"
                  : "iconHeroWrapper phone"
              }
            >
              <LazyLoadImage
                className="icon"
                src={phone}
                width="28px"
                height="32px"
                alt="icon"
              />
              <span>0786791782</span>
            </div>
            <div
              className={
                headerState
                  ? "iconHeroWrapper st_id-open"
                  : "iconHeroWrapper st_id"
              }
            >
              <LazyLoadImage
                className="icon"
                src={student}
                width="32px"
                height="32px"
                alt="icon"
              />
              <StudentIdWrapper>
                <span>19110237</span>
                <span>19110221</span>
              </StudentIdWrapper>
            </div>
          </div>
          <div className="header__center">
            <div ref={wordLogo} className="wordLogo">
              <span>SARK</span>
            </div>
            <div className="navHeroShop" ref={navBar}>
              <Link to="#">
                <span className="navHero__item nav__item__1"> Category</span>
              </Link>
              <Link to="/">
                <span className="navHero__item nav__item__2"> Home</span>
              </Link>
              <Link to="#">
                <span className="navHero__item nav__item__3"> Feature</span>
              </Link>
            </div>
          </div>
          <div className="header__right">
            <div className="welcome">
              <Link className="aTag" to="/login">
                <div className="sign-in">
                  <span>Sign in</span>
                </div>
              </Link>
              <Link className="aTag" to="/register">
                <div className="sign-up">
                  <span>Sign up</span>
                </div>
              </Link>
            </div>
            <div className="search">
              <form action={`/products?item=`} method="GET">
                <input
                  className="inputSearch"
                  type="text"
                  placeholder="Enter me"
                  name="search"
                />
                <input type="submit" value="Search" />
              </form>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
