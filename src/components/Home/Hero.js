import React from 'react'
import "../../assets/css/home/Hero.css"
import mainBoy from "../../assets/Home/Hero/mainBoy.png"
import leftBoy from "../../assets/Home/Hero/About medium photo.png"
import Navbar from './Navbar'
import { LazyLoadImage } from "react-lazy-load-image-component";
// import LazyLoad from "react-lazyload"
const Hero = () => {
    return (
    <div className="hero__bg">
        <div className="grid wide">
              <div className="hero--wordLogo">
                SARK BARBER
            </div>
            {/* middle image */}
            <div className="hero__firstIMG">
                <div className="firstIMG__leftWord">
                    <div className="hero--title">We are P203 team</div>
                    <div className="hero--content">Chúng tôi cung câp các dịch vụ, sản phẩm <br/> chăm sóc cho tóc và làn da của nam giới.</div>
                </div>
                <img className="hero__firstIMG__img" src={mainBoy} alt="IMG" />
            </div>
            {/* nav icon */}
                <Navbar />

            
            {/* left image */}
            <div className="hero__leftIMG">

                <img className="hero__leftIMG__img" style={{margin:'51px 32px 0 -50px'}} src={leftBoy} alt="IMG" />
                <div className="firstIMG__rightWord">
                    <div className="hero--title">VỀ SARK BARBER</div>
                    <div className="hero--content">
                    Công ty chúng tôi thành lập vào đầu năm 2021,
                    <br/> nhưng chúng tôi cam kết với kinh nghiệm đã có
                    <br/> chúng tôi tin rằng sẽ làm cho mọi người hài lòng 
                    <br/> về dịch vụ của SARK BARBER SHOP.
                    </div>
                </div>
            </div>
      </div>
           
    </div>
    )
}

export default Hero
