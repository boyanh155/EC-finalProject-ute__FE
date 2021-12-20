import React, { useState, useEffect } from "react";
import "../../assets/css/home/Hero.css";
import midboy from "../../assets/Home/Hero/midboy.png";
import leftBoy from "../../assets/Home/Hero/leftpic.png";
import rightBoy from "../../assets/Home/Hero/rightpic.png";
import Navbar from "./Navbar";
import Vector from "../../assets/Home/Hero/vector.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
// import LazyLoad from "react-lazyload"
const Hero = ({ navBtTheme: y }) => {
  const [navState, setNavState] = useState("black");
  const [bookNavState, setBookNavState] = useState("black");
  const colorMenuChange = { color: `${navState}`, borderColor: `${navState}` };
  const colorBookChange = {
    color: `${bookNavState}`,
    borderColor: `${bookNavState}`,
  };
  useEffect(() => {
    if (y < 1225 || y >= 2173) {
      setNavState("black");
    } else if (y >= 1225 || y < 2173) {
      setNavState("wheat");
    }
    if (y < 780 || y >= 2114) {
      setBookNavState("black");
    } else if (y >= 780 || y < 2114) {
      setBookNavState("wheat");
    } 
    if (y >= 4173) {
      setBookNavState("white");
      setNavState("white");

    }
  }, [y]);
  return (
    <div className="hero__bg">
                <LazyLoadImage
            className="vector"
            width="448px"
            height="auto"
            src={Vector}
            alt={"img"}
            effect="blur"
          />
      <div className="grid wide Wrapper">
        <div className="hero--wordLogo">
           <span>SARK BARBER</span> 
           </div>

        {/* middle image */}
        <div className="hero__firstIMG">
          <div className="firstIMG__leftWord">
            <div className="hero--title"> sark barber </div>
            <div className="hero--content">
              Ready to create an art <br /> form on your body
            </div>
          </div>
          <LazyLoadImage
            className="hero__firstIMG__img"
            width="448px"
            height="auto"
            src={midboy}
            alt={"img"}
            effect="blur"
          />
        </div>

        {/* nav icon */}
        <Navbar
          colorMenuChange={colorMenuChange}
          colorBookChange={colorBookChange}
        />

        {/* left image */}
        <div className="hero__leftIMG">
          <LazyLoadImage
            className="hero__leftIMG__1"
            style={{}}
            width= "409px"
            height ="680px"
            src={leftBoy}
            alt={"img"}
            effect="blur"
          />
          <div className="firstIMG__rightWord">
            <div className="underContent">
            Cửa hàng chúng tôi thành lập vào đầu năm 2021, nhưng tư tin cam kết với kinh nghiệm đã có chúng tôi tin rằng sẽ làm cho mọi người hài lòng về dịch vụ của SARK BARBER SHOP
            </div>
          </div>
          <LazyLoadImage
            className="hero__leftIMG__2"
            style={{}}
            width= "414px"
            height ="576px"
            src={rightBoy}
            alt={"img"}
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
