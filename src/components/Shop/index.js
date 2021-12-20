import React, { Suspense } from "react";
const Header = React.lazy(() => import("../Common/Header"));
const Hero = React.lazy(() => import("./Hero"));
const Category = React.lazy(() => import("./Category"));
const index = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header scrollY={undefined} />
      <Hero />
      <Category />
    </Suspense>
  );
};

export default index;
