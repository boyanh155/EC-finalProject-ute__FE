import React from 'react'
import "../../assets/css/admin/saletable.css"
import {
  Routes, // instead of "Switch"
  Route,
  Link
} from "react-router-dom";
// Layout
const Topbar = React.lazy(()=>import("../../components/SaleTable/topbar/Topbar"))
const Sidebar = React.lazy(()=>import("../../components/SaleTable/Sidebar"))
// Page
const Home = React.lazy(()=>import("../SaleTable/page/Home"))
const UserList = React.lazy(()=> import("../SaleTable/page/UserList"))
const Index = () => {
  const path = window.location.pathname
  return (
  <div className="">
      <Topbar/>
      <div className="container" style={{margin:"0"}}>
        <Sidebar props={path}/>
        <Routes>
        {/* Page */}

              <Route path='/' element={<Home/>}/>
              <Route path='users' element={<UserList/>}/>
        </Routes>


      </div>
  </div>
  )
}

export default Index