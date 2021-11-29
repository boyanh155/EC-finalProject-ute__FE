
import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
const HeaderWrapper = styled.div`
    width:100%;
    height:157px;
    position:fixed;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.1936) 20.31%, rgba(0, 0, 0, 0.1474) 40.1%, rgba(0, 0, 0, 0.0924) 57.29%, rgba(0, 0, 0, 0) 88.02%);
border-radius: 4px;
    color: #984C45;
    display :flex;
    justify-content:space-evenly;
    align-items:center;
    span{

    }
`
const LeftHeader = styled.div`
    cursor:pointer;
    width : 260px;
    height : 50px;
    background-color:#000;
    display :flex;
    justify-content:center;
    align-items:center;
    span{
        color:#fff;
        font-size:24px;
        line-height:28px;
    }
`
const WordLogoHeader = styled.div`
span{
    text-transform:uppercase;
    font-size: 100px;
    line-height: 120px;
    text-align: center;
    letter-spacing: -1.2px;
}
`
const RightHeader = styled.div`
    display:flex;
    justify-content:space-between;
`
const SearchBox = styled.div`
margin-right:90px;
input{
    margin-right:10px;
}
input{
    width : 260px;
    height : 50px;
    color:#fff;
    font-size:24px;
    line-height:28px;
    background-color:#000;
    color:#fff;
    border:none;
    text-align:center;
}
`
const NumberOfCart = styled.div`
    position:absolute;
    top:4px;
    right:-14px;
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#000;
    span{
        position:absolute;
        bottom:-14px;
        font-weight:300;
        right:5px;
        font-size:16px;
        color:#fff;
    }
`
const IconBag = styled.div`
    i{
        font-size:40px;
        color:black;
        line-height:50px;
        position:relative;
    }

`
const IconSearch = styled.div`
    display:inline-block;
    cursor:pointer;
    position:absolute;
    color:black;
    i{
        font-size:40px;
        color:black;
        line-height:50px;
    }
`
const Header = () => {
    const [numberOfProduct,setNumberOfProduct] = useState(0)
    return (
        <HeaderWrapper>
            <LeftHeader>
                <span>Đăng nhập</span>
            </LeftHeader>
            <WordLogoHeader>
                <span>sark shop</span>

            </WordLogoHeader>
            <RightHeader>
                <SearchBox>
                    <form id="searchForm" action="/" method="GET">
                        <input type="text" name="product" placeholder="Tìm sản phẩm"/> 

                        <IconSearch
                            onClick={()=>document.querySelector("#searchForm").submit()}
                        >
                            <i class="fas fa-search"></i>
                        </IconSearch>
                    </form>
                </SearchBox>
                <IconBag>
                    <Link to="/cart">
                        <i className="fas fa-shopping-bag">
                            <NumberOfCart>
                                <span>{numberOfProduct}</span>
                            </NumberOfCart>
                        </i>
                    </Link>

                </IconBag>
            </RightHeader>
        </HeaderWrapper>
    )
}

export default Header
