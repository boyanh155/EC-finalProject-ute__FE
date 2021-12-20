import React from "react";
import Hero1Pic from "../../assets/Shop/Hero1Pic.png";
import styled from "styled-components";
import "../../assets/css/shop/hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const HeroWrapper = styled.div`
  width: 100%;
  height: 950px;
  transition: all 0.3 linear;
  -webkit-transition: all 0.3 linear;
  -moz-transition: all 0.3 linear;
  -ms-transition: all 0.3 linear;
  -o-transition: all 0.3 linear;
`;
var settings = {
  infinite: true,
  speed: 1000,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
};
const Hero = () => {
  return (
    <HeroWrapper>
      <Slider {...settings} className="sliderWrapper">
        <div className="slider slider__1">
          <div className="hero1__content">
            <h1>limited time offer</h1>
            <h2>20% off</h2>
            <h3>All Hair And Skin Essential</h3>
            <Link className="anti-drag a-tag" to={`/product?item=hero1`}>
              <div className="hero1__button">
                <span>shop now</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="slider slider__2">
          <Link className="anti-drag a-tag" to="products?item=hero2"></Link>
        </div>

        <div className="slider slider__3">
          <Link className="anti-drag a-tag" to="products?item=hero3"></Link>
        </div>
        <div className="slider slider__smooth2">
          <Link className="anti-drag a-tag" to="products?item=hero2"></Link>
        </div>
        <div className="slider slider__4">
          <Link className="anti-drag a-tag" to="products?item=hero4"></Link>
        </div>
        <div className="slider slider__smooth3">
          <Link className="anti-drag a-tag" to="products?item=hero2"></Link>
        </div>
        <div className="slider slider__5">
          <Link className="anti-drag a-tag" to="products?item=hero5"></Link>
        </div>
      </Slider>
    </HeroWrapper>
  );
};

export default Hero;
