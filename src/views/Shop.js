import React, { Suspense } from "react";
const Index = React.lazy(() => import("../components/Shop"));

const Shop = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Index />
    </Suspense>
  );
};

export default Shop;
