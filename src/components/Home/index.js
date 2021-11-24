import React, { Suspense, useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

const Hero = React.lazy(() => import("../Home/Hero"));
const BigCenterPic = React.lazy(() => import("../Home/BigCenterPic"));
const ScrollToTop = React.lazy(() => import("../Util/ScrollToTop"));
const About = React.lazy(() => import("../Home/About"));

const Index = () => {
  const [toTop, setToTop] = useState(false);
  const { y } = useWindowScroll();
  // scroll
  useEffect(() => {
    const handleScroll = (e) => {
      if (y > 400) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    };
    window.addEventListener("scroll", (e) => handleScroll(e));

    return () => {
      //unsubscribe
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, [y]);
  const scrollToTopHandler = () => {
    console.log(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //Render
  return (
    <Suspense fallback={<h1> Home loading.... </h1>}>
      {" "}
      <Hero navBtTheme={y} />
      <BigCenterPic />
      <About />
      <ScrollToTop onClick={scrollToTopHandler} props={toTop} />{" "}
    </Suspense>
  );
};

export default Index;
