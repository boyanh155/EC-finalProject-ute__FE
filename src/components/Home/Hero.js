import React, { useState, useEffect } from "react";
import "../../assets/css/home/Hero.css";
import mainBoy from "../../assets/Home/Hero/mainBoy.png";
import leftBoy from "../../assets/Home/Hero/About medium photo.png";
import Navbar from "./Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import LazyLoad from "react-lazyload"
const Hero = ({ navBtTheme: y }) => {
  const [navState, setNavState] = useState("black");
  const [bookNavState, setBookNavState] = useState("black");
  const colorMenuChange = { color: `${navState}`, borderColor: `${navState}` };
  const colorBookChange = { color: `${bookNavState}`, borderColor: `${bookNavState}` };
  useEffect(() => {
    if (y < 1225) {
      setNavState("black");
    } else if (y >= 1225) {
      setNavState("wheat");
    }
    if (y < 780) {
        setBookNavState("black");
      } else if (y >= 780) {
        setBookNavState("wheat");
      }
  }, [y]);
  return (
    <div className="hero__bg">
      <div className="grid wide">
        <div className="hero--wordLogo"> SARK BARBER </div> 

        {/* middle image */}
        <div className="hero__firstIMG">
          <div className="firstIMG__leftWord">
            <div className="hero--title"> We are P203 team </div>
            <div className="hero--content">
              Chúng tôi cung câp các dịch vụ, sản phẩm <br /> chăm sóc cho tóc
              và làn da của nam giới.
            </div>
          </div>
          <LazyLoadImage
            className="hero__firstIMG__img"
            src={mainBoy}
            alt={"img"}
            effect="blur"
          />
        </div>

        {/* nav icon */} 
        <Navbar colorMenuChange={colorMenuChange} colorBookChange={colorBookChange}/> 

        {/* left image */}
        <div className="hero__leftIMG">
          <LazyLoadImage
            className="hero__leftIMG__img"
            style={{ margin: "51px 32px 0 -50px" }}
            src={leftBoy}
            alt={"img"}
            effect="blur"
          />
          <div className="firstIMG__rightWord">
            <div className="hero--title"> VỀ SARK BARBER </div>
            <div className="hero--content">
              Công ty chúng tôi thành lập vào đầu năm 2021, <br /> nhưng chúng
              tôi cam kết với kinh nghiệm đã có <br /> chúng tôi tin rằng sẽ làm
              cho mọi người hài lòng <br /> về dịch vụ của SARK BARBER SHOP.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
