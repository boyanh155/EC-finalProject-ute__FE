import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Vector from "../../assets/Home/Footer/Vector1.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Wrapper = styled.div`
    position:relative;
    height:298px;
    width:100%;
    background-color:#000;
    display:flex;
    justify-content :space-around;
    a{
        text-decoration:none;
    }
`
// left
const LeftContent = styled.div`
font-size:16px;
line-height:20px;
letter-spacing:-0.4px;
display:flex;
justify-content:space-between;
`
const FirstSpan = styled.div`
    display :flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-right:24px;
    span{

        color:#fff;
    }
    span:first-of-type{
        display:block;
    }

`
const SecondSpan = styled.div`
    display :flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    span{

        color:#fff;
    }
    span:first-of-type{
        display:block;
    }


`
// mid
const MidContent = styled.div`
    align-self:center;

`
// right
const RightContent = styled.div` 
color:#fff;
display:flex;
align-items:center;
justify-content:space-between;
    p{
        position:relative;
        left:-200px;
        font-size: 30px;
        line-height: 37px;
        letter-spacing: -1.125px;
    }
    a{
        color:#fff;
    }
`
const ApplyBt = styled.div`
    width: 160px;
    height: 50px;
    border:2px solid #fff;
    display :flex;
    align-items:center;
    transition:0.2s all linear;

    justify-content:center;
    span{   
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.4px;
        transition:0.2s all linear;

    }
    &:hover{
        transition:0.2s all linear;
        opacity:0.4;
    }
`
const OurFooter = () => {
    return (
        <Wrapper>
            {/* Left */}
            <LeftContent>
                <FirstSpan>
                    <Link to="#">
                        <span style={{marginBottom:"6px"}}>Terms of Service</span>
                    </Link>
                    <Link to="#">
                        <span> Privacy Policy</span>
                    </Link>
                </FirstSpan>
                <SecondSpan>
                        <Link to="#">
                            <span style={{marginBottom:"6px"}}>Instagram</span>
                        </Link>
                        <Link to="#">
                            <span> Facebook</span>
                        </Link>
                </SecondSpan>
            </LeftContent>
            {/* Vector */}
            <MidContent>
            <LazyLoadImage
            width="356px"
            height="200px"
            src = {Vector}
            />
            </MidContent>

            {/* Right */}
            <RightContent>
                <p>We invite you to join our team.</p>
                <Link to="#">
                    <ApplyBt>
                        <span> Apply now</span>
                    </ApplyBt>
                </Link>
            </RightContent>
        </Wrapper>
    )
}

export default OurFooter
