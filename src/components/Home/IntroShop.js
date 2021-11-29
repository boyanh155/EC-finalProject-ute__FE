import React from 'react'
import styled from 'styled-components'
import BG from "../../assets/Home/IntroShop/BG.png"
import {Link} from "react-router-dom"

// const shadow = keyframes`
// 0% {
//     text-shadow:  0 0 10px white;
//   }
  
//   15% {
//     text-shadow: 2px 2px 10px rgba(255, 255, 255, 1),
//                  -2px -2px 10px rgba(255, 255, 255, 1);
//   }
//   30% {
//     text-shadow: 2px 2px 4px rgba(255, 255, 255, .7),
//                  -2px -2px 4px rgba(255, 255, 255, .7);
//   }
//   50% {
//     text-shadow: 20px 20px 50px rgba(255, 255, 255, .5),
//                  -20px -20px 50px rgba(255, 255, 255, .5);
//   }
// `
const IntroShopWrapper = styled.div`
    position:relative;
    width:100%;
    height:983px;
    background:url(${BG}) no-repeat center/cover;
    background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37)), url(.jpg);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    
    p{
        text-transform:uppercase;
        font-size:200px;
        line-height:120px;
        letter-spacing:-1.5px;
        // knock text within light
        color:#000;
        // background-color: rgba(45, 76, 85,0.1);
        mix-blend-mode: screen;
        text-shadow:  0 0 10px white;
        // knock text within light
        // color: white;
        // mix-blend-mode: multiply;
        // background-color: rgb(0,0,0);
        

    }
`
const ButtonToShop = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    width:197px;
    height:51px;
    background-color:#fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.1s linear;

    &:hover{
        background-color:#000;
        transition: all 0.1s linear;

        span{
            transition: all 0.1s linear;
            color:#fff;
        }
    }
    span{
        text-transform:none;
        color:#000;
        font-size:26px;
        line-height:48px;
        letter-spacing:-1.5px;
    }
`
const ToShopLink = styled(Link)`
text-decoration:none;
margin-top :56px;

transition: all 0.3s linear;
    &:hover{
        transition: all 0.3s linear;

    }

`


const IntroShop = () => {

    return (
        <IntroShopWrapper>
                <p>
                    sark shop
                </p>
                <ToShopLink to="/shop">
                    <ButtonToShop
                    
                    >
                        <span>
                            Shop now
                        </span>
                    </ButtonToShop>

                </ToShopLink>

        </IntroShopWrapper>
    )
} 

export default IntroShop
