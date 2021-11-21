// import Hero from "../Home/Hero";
// import BigCenterPic from "../Home/BigCenterPic";
// import ScrollToTop from "../Home/ScrollToTop";
import { useWindowScroll } from "react-use";
import React,{Suspense, useState, useEffect } from "react";

const Hero = React.lazy(()=>import('../Home/Hero'))
const BigCenterPic = React.lazy(()=>import('../Home/BigCenterPic'))
const ScrollToTop = React.lazy(()=>import('../Home/ScrollToTop'))


const Home = () => {
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
    // Scroll


    // catch scroll

    const scrollToTopHandler = () => {
      console.log(true)
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
    return ( 
    <Suspense fallback={<div>Loading...</div>}>
        <Hero></Hero> 
        <BigCenterPic></BigCenterPic> 
        <ScrollToTop onClick={scrollToTopHandler} props = {toTop}/> 
    </Suspense>
    );
};

export default Home;