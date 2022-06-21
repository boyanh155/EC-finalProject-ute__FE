import React from 'react'
import {Link} from "react-router-dom"
import "../../../assets/css/shop/feature.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import red from "../../../assets/Shop-content/VT-red-wax.png"
import green from "../../../assets/Shop-content/VT-green-wax.png"
import grey from "../../../assets/Shop-content/VT-grey-wax.png"

const FeartureItem = ({...props}) => {
    const {imgSrc} = props
    console.log("SRC : ", imgSrc)
    return (
                <Link to={"/product/VT" + imgSrc}>
            <div className='featureItemWrapper'>
                {/* img */}
                <div className='featureItemWrapper__img'>
                    <LazyLoadImage
                    src={imgSrc==="red" ?(red) :(imgSrc === "green" ? green : grey)}
                    width={"100%"}                
                    />
                </div>
                
                {/* info */}
                <div className="featureItemWrapper__info row">
                    <div className="featureItemWrapper__info__name">Product name</div>
                    <div className="featureItemWrapper__info__price ">
                    <div className="featureItemWrapper__info__price--first">0.00VND</div>
                    <div className="featureItemWrapper__info__price--second">
                        <span>
                        0.00VND

                        </span>
                        </div>
                    </div>
                    <div className="row featureItemWrapper__info__under">
                            <div className="featureItemWrapper__info__under--size col">
                                    <div className="">500ml</div>
                                    <div className="">1000ml</div>
                            </div>
                            <div className="featureItemWrapper__info__under--add col">
                                <Link to={"cart/add/VT"+imgSrc}>
                                    <span>

                                    Add to cart
                                    </span>
                                    
                                </Link>
                            </div>
                    </div>


                </div>
            </div>
                </Link> 
    )
}

export default FeartureItem
