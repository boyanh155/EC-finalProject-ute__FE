import React, { useState,useReducer,useEffect } from "react";
// import { LeftData } from "./SliderStyleData";
import { personalizeReducer } from "../../reducers/personalizeReducer";
// redux
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
// action
import { changeStyle } from "../../store/actions/personalActions";


const StyleSelect = ({LeftDataRaw,changeStyle}) => {
  // handle data
  
  const LeftData= LeftDataRaw.filter((v)=>v.content==="main")

  //reducer select 
    // const [styleState,dispatch] = useReducer(personalizeReducer,{
    //     hairType:'',
    //     length:'',
    //     color:'',
    // })
    // handler style click
    const handlerHStyleClick = (style)=>{
      changeStyle(style)
    }
  return (
    <div className="leftSelect grid">
      <div className="row-leftSelect__tittle">
        <span>Style</span>
      </div>
      <div className="row row-leftSelect">
        {LeftData.map((v, i) => {
          return (
            <div
                onClick={()=>handlerHStyleClick(v.type)}
              key={i}
              className="col col-leftSelect l-3"
              style={{
                background: `center top / cover  no-repeat url(${v.pic}) `,
              }}
            >
              <div className="col-leftSelect__content">
                <span>{v._name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// Prop
StyleSelect.propTypes ={
  LeftDataRaw:PropTypes.array.isRequired,
  changeStyle:PropTypes.func.isRequired
}

// state = store => rootReducer => styleList(current reducer : personalReducer) => state (initial state) 
const mapStateToProps = state =>({
  // (LeftDataRaw) : prop in component
  LeftDataRaw:state.styleList.listStyle
})
//connect (state,action)
export default connect(mapStateToProps,{changeStyle})(StyleSelect);
