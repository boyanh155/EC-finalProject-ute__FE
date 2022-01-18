import React from 'react'
import "../../../assets/css/shop/feature.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import red from "../../../assets/Shop-content/VT-red-wax.png"
import green from "../../../assets/Shop-content/VT-green-wax.png"
import grey from "../../../assets/Shop-content/VT-grey-wax.png"

const FeartureItem = ({...props}) => {
    const {imgSrc} = props
    console.log("SRC : ", imgSrc)
    return (
        <div className='featureItemWrapper'>
            {/* img */}
            <div className='featureItemWrapper__img'>
                <LazyLoadImage
                src={["imgSrc"]}
                width={"100%"}
                />
            </div>
            {/* info */}
        </div>
    )
}

export default FeartureItem
