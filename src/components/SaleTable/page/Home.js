import React from 'react'
import "../../../assets/css/admin/home.css"
import { userData } from "./dummyData";
const FeaturedInfo = React.lazy(()=> import("../FeartureInfo"))
const Chart = React.lazy(()=>import("../Chart"))
const WidgetLg = React.lazy(()=>import("../WidgetLg"))
const WidgetSm = React.lazy(()=>import("../WidgetSm"))
const Home = () => {
  return (
    <div className="home">
    <FeaturedInfo />
    <Chart data={userData} title="Revenue Statistic" grid dataKey="Active User"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
  </div>
  )
}

export default Home