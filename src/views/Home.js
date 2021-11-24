import React, { Suspense } from "react";
const Index = React.lazy(() => import("../components/Home"));

const Home = () => {
  //Render
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Index />
    </Suspense>
  );
};

export default Home;
