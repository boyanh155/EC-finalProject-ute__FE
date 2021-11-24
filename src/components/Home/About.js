import React from "react";
import AboutUs from "../../assets/Home/Aboutus/aboutusBG.png";
import MiddleImg from "../../assets/Home/Aboutus/middleAboutPic.png";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import SignatureImg from "../../assets/Home/Aboutus/p203Sign.png"
const AboutBG = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background-image: url(${AboutUs});
  width: 100%;
  height: 907px;
  margin-top: -4px;
`;
const BigWord = styled.div`
    position:absolute;
    span{
      color:white;
      font-size:60px;
      letter-spacing:-2.25px;
      line-height:66px;
    }
`
const Signature = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    span{
      color:#6E645F;
      font-size:20px;
      line-height:48px;
      letter-spacing:-1.5px;
      align-self:center;
    }
`
const About = () => {
  return (
    <AboutBG>
      <BigWord>
      <span>Đam mê của<br/>chúng tôi</span>
      </BigWord>
      <Signature>
          <span>Signature</span>
          <LazyLoadImage
            width="244px"
            height="127px"
            src ={SignatureImg}
          />
      </Signature>
      <LazyLoadImage
        alt="img"
        width="558px"
        height="720px"
        src={MiddleImg}
        effect="blur"
      />
    </AboutBG>
  );
};

export default About;
