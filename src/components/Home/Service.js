import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LeftPic from "../../assets/Home/Service/left.png";
import RightPic from "../../assets/Home/Service/right.png";
import MidPic from "../../assets/Home/Service/mid.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
const ServiceWrapper = styled.div`
  width: 100%;
  height: 1100px;
  position: relative;
  background-color: #9dcdb7;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

`;
const ServicePic = styled.div`
pointer-events:none;

  display: flex;
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  z-index: 9;
  align-items: center;
  justify-content: space-evenly;
  img:nth-child(2) {
  }
  img:nth-child(3) {
  }
`;
const LeftContent = styled.div`
display :flex;
flex-direction:column;
align-items: self-end;
justify-content:center;
pointer-events:none;
flex:1;
    img{
        
    }
            span{
                font-size:40px;
                line-height:48px;
                letter-spacing:-1.5px;
                color:#fff;
                position:relative;
                top 48px;
                left:134px;
                white-space:nowrap;
            }
`;
const RightContent = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-evenly;
  align-items: center;
  align-items: center;
`;
const Bear = styled.div`
  background-color: black;
  width: 45%;
  height: 70%;
  z-index: 4;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #e2cd10;
  clip-path: polygon(0 90%, 100% 0, 100% 100%, 0% 100%);
`;
const Word = styled.span`
  position: absolute;
  top: -100px;
  font-size: 88px;
  line-height: 66px;
  letter-spacing: -1.5px;
  color: #fff;
`;
const PersonalizeBt = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.4px;
  position: absolute;
  top: 100px;
  left: 75px;
  transition: all 0.3s linear;

  &:hover span {
    color: #000;
    border: 2px solid #000;
    transition: all 0.3s linear;
  }
  span {
    color: #fff;
    border: 2px solid #fff;
    padding: 10px 24px;
    transition: all 0.3s linear;
  }
  a {
    text-decoration: none;
  }
`;
const btStyle = {
  position: "fixed",
  top: "30px",
};
const Service = ({ y }) => {
  const [buttonState, setButtonState] = useState(false);
  useEffect(() => {
    setButtonState(y > 3242 ? true : false);
  }, [y]);
  return (
    <ServiceWrapper>
      <ServicePic>
        {/* 3 Pic */}

        {/* left pic */}

        <LeftContent>
          <LazyLoadImage src={LeftPic} width="284px" max-height="592px" />
          <span>
            Chúng tôi sẽ giúp
            <br /> bạn đẹp theo cá tính
            <br /> và mong muốn của bạn
          </span>
        </LeftContent>
        <Word>Our Service</Word>
        <RightContent>
          {/* middle pic */}
          <LazyLoadImage src={MidPic} max-width="264px" max-height="545px" />
          {/* right pic */}
          <LazyLoadImage src={RightPic} max-width="291px" max-height="542px" />
        </RightContent>
      </ServicePic>
      {/* Clip path */}
      <Bear />
      {/* Goto Personalize */}
      <PersonalizeBt style={buttonState  ? btStyle : {}}>
        <Link to="personalize">
          <span>Personalize your style</span>
        </Link>
      </PersonalizeBt>
    </ServiceWrapper>
  );
};

export default Service;
