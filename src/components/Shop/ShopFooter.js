import React from 'react'
import "../../assets/css/shop/footer.css"
const Info = React.lazy(()=>import("./Footer/Info"))
const Subscribe = React.lazy(()=>import("./Footer/Subscribe"))
const Policy = React.lazy(()=>import("./Footer/Policy"))
const ShopFooter = () => {
  return (
    <div className="Wrapper">
        {/* R1 - Info */}
        <Info/>
        {/* R2 - Subscribe */}
        <Subscribe/>
        {/* R3 - Policy */}
        <Policy/>
    </div>
  )
}

export default ShopFooter