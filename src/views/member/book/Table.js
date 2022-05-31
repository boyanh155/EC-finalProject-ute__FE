import React, { useState } from "react";
import { Row,Col } from "reactstrap";
import "../../../assets/css/member/table.css"
const Table = (props) => {
  // Row 1
  console.log(`table : ${props.table}`)

 const getRow1 =()=>{
   let chairs=[];
      console.log(props.chair)
   for(let i = 0;i<Math.ceil(props.chair/2);i++){
     chairs.push(     
     <span
      key={i}
      className={props.empty ? "empty-table" :"full-table"}
     >

     </span>)

   }
   return chairs
 }
//  Row 2
const getRow2 =()=>{
  let chairs=[];
  for(let i = 0;i<Math.floor(props.chair/2);i++){
    chairs.push(     
    <span
     key={i}
     className={props.empty ? "empty-table" :"full-table"}
    >

    </span>)

  }
  return chairs
}
// render
  return <div
  className="table-container">
      <Col
      className={props.empty ?"table selectable-table":""}
      onClick={()=>{
        props.empty?props.selectTable(props.name,props.id):console.log("tried to select full table");
      }}
      >
        <Row noGutters className="table-row">
            <Col
            className="text-center"
            >
              {/* {getRow1()} */}
            </Col>
        </Row>
        <Row noGutters className="table-row">
            <Col
            className="text-center"
            >
              {/* {getRow2()} */}
            </Col>
        </Row>
        {/* Table name */}
        <p className="text-center table-name">
          {props.name}
        </p>
      </Col>
    
    </div>;
};

export default Table;
