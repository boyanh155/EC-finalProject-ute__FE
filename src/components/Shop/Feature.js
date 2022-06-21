import React, { Suspense } from "react";
import "../../assets/css/shop/feature.css"
const Fitem = React.lazy(()=>import("./Feature/FeartureItem"))
const Feature = () => {
    
  return<Suspense>
    <div className="featureBG">
        {/* Feature wrapper */}
        <div className="grid ">
        <div className="centerWord feature"><span>Shop by feature</span></div>
        {/* Feature List */}
        <div className="row featureList">
        <div className="col l-3 m-6 c-12 featureList__item">
            <Fitem imgSrc={"red"}/>
        </div>
        <div className="col l-3 m-6 c-12 featureList__item">
            <Fitem imgSrc={"green"}/>
        </div>
        <div className="col l-3 m-6 c-12 featureList__item">
            <Fitem imgSrc={"grey"}/>
        </div>
        <div className="col l-3 m-6 c-12 featureList__item">
            <Fitem imgSrc={"red"}/>
        </div>
        </div>

    </div>;

  </div>

  </Suspense>

};

export default Feature;
