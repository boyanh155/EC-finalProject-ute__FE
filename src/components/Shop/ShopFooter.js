import React from 'react'
import "../../assets/css/shop/footer.css"
const Info = React.lazy(()=>import("./Footer/Info"))
const Subscribe = React.lazy(()=>import("./Footer/Subscribe"))
const Policy = React.lazy(()=>import("./Footer/Policy"))
const ShopFooter = () => {
  return (
    <div className="SF_Wrapper grid">
      <div className="SF_Content">
        <div className="SF_Content__Info">
          {/* R1 - Info */}
          <Info/>
        </div>
        <div className="SF_Content__Subscribe">
          {/* R2 - Subscribe */}
          <Subscribe/></div>
        <div className="SF_Content__Policy">
          {/* R3 - Policy */}
          <Policy/>
        </div>

      </div>

    </div>
  )
}

export default ShopFooter