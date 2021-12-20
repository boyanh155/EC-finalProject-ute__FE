import React, { useReducer } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/css/personal/personalize.css";
//hair style image
import uB from "../../assets/hairstyle/undercutBrown.png";
//reducer
import { SliderData } from "./SliderStyleData";
// redux
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const SliderCustom = ({sliderData}) => {
  console.log("........................")
  // handle data
  const currentType = sliderData.filter(v=>v.selected===true)[0] ||sliderData
  console.log(currentType)
  return (
    <div className="SliderCustomWrapper">
      <Slider {...settings}>
        {sliderData.map((v, i) => {
          if(v.type === currentType.type){
            return (
              <div className="person__hairStyle" key={i}>
                <LazyLoadImage height={"700px"} width={"auto"} src={v.pic} />
              </div>
            );
          }

        })}
      </Slider>
    </div>
  );
  
};
// Prop
SliderCustom.propTypes ={
  sliderData:PropTypes.array.isRequired,
}
// state = store => rootReducer => styleList(current reducer : personalReducer) => state (initial state) 
const mapStateToProps = state =>({
  // (LeftDataRaw) : prop in component
  sliderData:state.styleList.listStyle
})
//connect (
export default connect(mapStateToProps,{})(SliderCustom);
