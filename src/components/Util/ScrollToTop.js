import React from "react";
import * as Icon from "react-icons/io";
import styled,{ keyframes } from "styled-components"
//icon color
const grey = `rgba(192,192,192,0.9)`
//animation
const jump = keyframes`
  0% { 
    transform:translateY(-6px); 
    -webkit-transform: translateY(-6px);
    -moz-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    -o-transform: translateY(-6px);
  }
  100% {         
    transform: translateY(6px);
    -webkit-transform: translateY(6px);
    -moz-transform: translateY(6px);
    -ms-transform: translateY(6px);
    -o-transform: translateY(6px); 
  }
`;
const ToTop = styled.div`
  cursor:pointer;
  position:fixed;
  bottom:24px;
  right:24px;
  font-size:30px;
  padding: 10px 20px;
  border:2px solid ${grey};
  transition: 0.2s all linear;
  border-radius:10%;
  color:${grey};
  svg{
    color:${grey};
    // animation: ${jump} 3s linear infinite alternate;
    // -webkit-animation: ${jump} 2s linear infinite alternate;
  }

  &:hover{
    
    opacity:0.5;
    transition: 0.2s all linear;
  }
`
//icon
const arrow = ()=><Icon.IoIosArrowUp />
const IconA = styled(arrow)`
`
const ScrollToTop = ({props,onClick}) => {
  return (
    props&&
    <ToTop onClick={onClick}>
      <IconA />
    </ToTop>
  );
};

export default ScrollToTop;
