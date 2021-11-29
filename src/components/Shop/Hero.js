import React from "react";
import Hero1Pic from "../../assets/Shop/Hero1Pic.png"
import styled from "styled-components";
const HeroWrapper = styled.div`
  width:100%;
  height: 950px;
  background-image:url(${Hero1Pic});
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
`
const Hero = () => {
  return <HeroWrapper>

  </HeroWrapper>;
};

export default Hero;
