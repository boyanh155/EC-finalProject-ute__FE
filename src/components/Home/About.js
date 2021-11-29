import React from "react";
import AboutUs from "../../assets/Home/Aboutus/aboutusBG.png";
import MiddleImg from "../../assets/Home/Aboutus/middleAboutPic.png";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import SignatureImg from "../../assets/Home/Aboutus/p203Sign.png";
const AboutBG = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-image: url(${AboutUs});
  width: 100%;
  height: 907px;
  margin-top: -4px;
`;
const BigWord = styled.div`
  position: relative;
  text-align: center;
  left: 129px;
  white-space: nowrap;
  span {
    color: white;
    font-size: 60px;
    letter-spacing: -2.25px;
    line-height: 66px;
  }
`;
const Signature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  position: relative;
  span {
    margin-right: 200px;
    color: #6e645f;
    font-size: 20px;
    line-height: 48px;
    letter-spacing: -1.5px;
    align-self: center;
  }
`;
const Passion = styled.div`
  position: relative;
  width: 308px;
  height: 120px;
  color: #6e645f;
  align-self: flex-end;
  span {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;
const LeftWrapper = styled.div`
  flex: 3;
  position: relative;
  right: -120px;
  display: flex;
`;
const RightWrapper = styled.div`
  width: 427px;
  height: 178px;
  flex: 1;
  align-self: flex-start;
  position: relative;
  top: 194px;
  right: 48px;
  // margin-top:-50px;
`;
const About = () => {
  return (
    <AboutBG>
      {/* Left content */}
      <LeftWrapper>
        <BigWord>
          <span>
            Đam mê của
            <br />
            chúng tôi
          </span>
        </BigWord>
        {/* Center Pic */}
        <LazyLoadImage
          alt="img"
          width="558px"
          height="720px"
          src={MiddleImg}
          effect="blur"
        />
        <Passion className="aboutOurPassion">
          <span className="aboutOurPassion__content">
            Với khát vọng làm đẹp cho nam giới ở
            <br /> trên Việt Nam. Những người thợ với nhiều
            <br /> năm trong nghề cùng nhau hợp tác tạo
            <br /> nên một thương hiệu chăm sóc tóc nói
            <br /> riêng và sức khỏe nam giới nói chung. <br />
          </span>
        </Passion>
      </LeftWrapper>
      {/* Right content */}
      <RightWrapper>
        <Signature>
          {/* Our sign */}
          <span>Signature</span>
          <LazyLoadImage width="244px" height="127px" src={SignatureImg} />
        </Signature>
      </RightWrapper>
    </AboutBG>
  );
};

export default React.memo(About);
