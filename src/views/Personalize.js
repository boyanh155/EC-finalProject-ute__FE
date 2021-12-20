import React, { Suspense } from "react";
import "../assets/css/personal/personalize.css";
import styled from "styled-components";
const SliderCustom = React.lazy(() =>
  import("../components/Personal/SliderCustom")
);
const ColorSelector = React.lazy(() =>
  import("../components/Personal/ColorSelector")
);
const Header = React.lazy(() => import("../components/Common/Header"));
const LeftSelect = React.lazy(()=>import("../components/Personal/StyleSelect"))
const TopWrapper = styled.div`
width:100%;
display:flex;
`
const Personalize = () => {
  return (
    <Suspense>
      <section
       className="personWrapper"
      
       >
        {/* <Header scrollY={700}/> */}
      <TopWrapper>
          {/* Left select style */}
        <LeftSelect />
          {/* Right select style color */}
        <SliderCustom />
      </TopWrapper>
        {/* lower select color */}
        <ColorSelector />
      </section>
    </Suspense>
  );
};

export default Personalize;
