import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Nav
const Nav = React.lazy(()=>import("./ProductNav"))
// Hero
const Hero = React.lazy(()=>import("./ProductHero"))
// content
const ProductCard = React.lazy(()=> import("./ProductCard"))
const index = () => {
  return (
    <div>
        {/* Row 1 - Title */}
        {/* Row 1 - Title - Nav bar */}
        <Nav/>
        {/* Row 2 - Title - Hero poster */}
        <Hero/>
        {/* Row 2 - Content */}
        {/* Row 1 - Content - Side bar */}
        {/* Row 2 - Content - Main content */}
        <Routes>
            
            <Route exact path="sth" element={<ProductCard/>}/>
            <Route path="/*" element={<div>All product</div>}/>
        </Routes>
    </div>
  )
}

export default index