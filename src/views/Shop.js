import React,{Suspense,useEffect,useState} from "react";
import { useWindowScroll } from "react-use";
const Index = React.lazy(()=>import("../components/Shop"))

const Shop = () => {
  const { y } = useWindowScroll();
  //true is on Top
  const [headerState,setHeaderState] = useState(true)
  useEffect(() => {
    console.log(y)

  }, [y])
    return  (
    <Suspense fallback={<h1>Loading...</h1>} >
        <Index/>
    </Suspense>
  )
};

export default Shop;
