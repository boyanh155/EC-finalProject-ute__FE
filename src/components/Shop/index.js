import React, { Suspense } from "react";
const Header = React.lazy(() => import("../Common/Header"));
const Hero = React.lazy(() => import("./Hero"));
const Category = React.lazy(() => import("./Category"));
const Feature = React.lazy(() => import("./Feature"));
const ContactUs = React.lazy(()=> import("./ContactUs"))
const ShopFooter = React.lazy(()=>import("./ShopFooter"))
const index = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header scrollY={undefined} />
      <Hero />
      <Category />
      <Feature />
      <ContactUs/>
      <ShopFooter />
    </Suspense>
  );
};

export default index;
