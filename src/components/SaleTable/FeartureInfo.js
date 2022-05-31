import React from "react";
import "../../assets/css/admin/featureInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
//dummyData
let ili ={
  name:"Hair",
  quantity:1,
  price:1,
  total:1,
} 
let order = {
  desc: "Nothing",
  inlineItem: [ili,ili,ili],
  phone: 786791782,
  user: 1,
  payment: "Mastercard",
  time: "Tue May 31 2022 16:43:16 GMT+0700 (Giờ Đông Dương)",
  total: 150,
};

let rawData = [];
for (let i = 0; i <= 13; i++) {
  rawData.push(order);
}
// Function
const dataHandler = ((data)=>{
  let Revenue,Order,Product
  Revenue = data.reduce((prev,cur)=>{return prev+cur.total},0)
  Order = data.length
  Product = data.reduce((prev,cur)=>{
    return prev + cur.inlineItem.reduce((prev,cur)=>{
      return prev + cur.total
    },0)
  },0)
  let obj = {
    Revenue,
    Order,
    Product
  }
  return obj
} )
let dumData = dataHandler(rawData)
const FeartureInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${dumData['Revenue']}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Order</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dumData['Order']}</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Product</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dumData['Product']}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeartureInfo;
