import React from 'react'
import "../../assets/css/shop/category.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
// category
import blackPomade from "../../assets/Shop-content/PomadeBlack.jfif"
import diyPomade from "../../assets/Shop-content/DIYpomade.jfif"
import clayWax from "../../assets/Shop-content/Clay.jfif"
const Category = () => {
    return (
        <div className="categoryWrapper">
        <div className="grid wide gridCategory">
            <div className="centerWord"><span>shop by category</span></div>
            {/* row 1 */}
            <div className="row category__list smooth">
                <div className="category__item l-3 smooth">
                    <LazyLoadImage 
                    className="imageCategory smooth" 
                    src={blackPomade} 
                    alt="black pomade" />
                    <span className="smooth"  >weightless <br/>pomade</span>
               </div>
                <div className="category__item l-6 smooth">
                <LazyLoadImage 
                    className="imageCategory smooth" 
                    height="367px"
                    src={diyPomade} 
                    alt="dit pomde" />
                    <span className="smooth">handmade wax</span>
                </div>
                <div className="category__item l-3 smooth">
                    <LazyLoadImage 
                    className="imageCategory smooth" 
                    height="367px"
                    src={clayWax} 
                    alt="clay wax" />
                    <span className="smooth">clay wax</span>
                </div>

            </div>
            {/* row 2 */}
            <div className="row category__list smooth">
            <div className="category__item l-3 smooth">
                    <LazyLoadImage 
                    className="imageCategory smooth" 
                    src={blackPomade} 
                    alt="black pomade" />
                    <span className="smooth"  >weightless <br/>pomade</span>
               </div>
                <div className="category__item l-6 smooth">
                <LazyLoadImage 
                    className="imageCategory smooth" 
                    height="367px"
                    src={diyPomade} 
                    alt="dit pomde" />
                    <span className="smooth">handmade wax</span>
                </div>
                <div className="category__item l-3 smooth">
                    <LazyLoadImage 
                    className="imageCategory smooth" 
                    height="367px"
                    src={clayWax} 
                    alt="clay wax" />
                    <span className="smooth">clay wax</span>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Category
