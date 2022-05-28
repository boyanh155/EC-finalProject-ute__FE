import React,{Suspense} from 'react'
import SaleTableComponent from "../../components/SaleTable"
const SaleTable = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
        <SaleTableComponent/>
    </Suspense>
  )
}

export default SaleTable