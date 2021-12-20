import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/css/personal/personalize.css";
const CSWrapper = styled.div`
  background-color: black;
  margin-top: 25px !important;
  height: calc(100vh - 725px);
  border-radius: 8px;
`;
const ColorSelector = () => {
  const [isActive, setIsActive] = useState(1);
  const handlerClick = (e) => {
    setIsActive(e.target.id);
  };
  return (
    <CSWrapper className="grid wide">
      <div className="row color__row color__title">
        <span>Color</span>
      </div>
      <div className="row color__row color__colorList">
        {/* active is selected */}
        <div
          onClick={(e) => handlerClick(e)}
          id="1"
          className={`col l-1 color__item  ${isActive == 1 ? "active" : ""}`}
        ></div>

        <div
          onClick={(e) => handlerClick(e)}
          id="2"
          className={`col l-1 color__item  ${isActive == 2 ? "active" : ""}`}
        ></div>
        <div
          onClick={(e) => handlerClick(e)}
          id="3"
          className={`col l-1 color__item  ${isActive == 3 ? "active" : ""}`}
        ></div>
        <div
          onClick={(e) => handlerClick(e)}
          id="4"
          className={`col l-1 color__item  ${isActive == 4 ? "active" : ""}`}
        ></div>
        <div
          onClick={(e) => handlerClick(e)}
          id="5"
          className={`col l-1 color__item  ${isActive == 5 ? "active" : ""}`}
        ></div>
      </div>
    </CSWrapper>
  );
};

export default ColorSelector;
