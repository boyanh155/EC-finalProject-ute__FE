import React,{Suspense} from 'react'
const Header = React.lazy(()=>import("./Header"))
const Hero = React.lazy(()=>import("./Hero"))

const index = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Header/>
            <Hero/>
        </Suspense>
    )
}

export default index
