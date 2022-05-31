import React from 'react'
import "../../assets/css/admin/featureInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeartureInfo = () => {
  let data = {
    Revenue:3000,
    Cost:4000,
    Quantity:100,
  }
  return (
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">{Object.keys(data)[0]}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">${data[Object.keys(data)[0]]}</span>
        <span className="featuredMoneyRate">
          -11.4 <ArrowDownward  className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">{Object.keys(data)[1]}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">${data[Object.keys(data)[1]]}</span>
        <span className="featuredMoneyRate">
          -1.4 <ArrowDownward className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">{Object.keys(data)[2]}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{data[Object.keys(data)[2]]}</span>
        <span className="featuredMoneyRate">
          +2.4 <ArrowUpward className="featuredIcon"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  </div>
  )
}

export default FeartureInfo