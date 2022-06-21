import React, { useState,useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../components/SaleTable/page/dummyData";
import { Link } from "react-router-dom";
import { getUsers } from "../../../apis";
import axios from "axios"
import "../../../assets/css/admin/userlist.css";
const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(async()=>{
    let rawData = []
    await axios.get('http://localhost:5000/api/user').then((res)=>{
      rawData = res.data.users
    }).catch(e=>{
      console.log(e.message)
    })
    let dummyData = rawData.map((v,i)=>{
      return {
        ...v
        ,
        id : i+1
      }
    })

    setData(dummyData)
  
  },[])
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // Field
  const columns = [      
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "lastName",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="http://cdn.onlinewebfonts.com/svg/img_297675.png" alt="" />
            {params.row.firstName +" "+ params.row.lastName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "admin",
      headerName: "Admin",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <input type="checkbox" checked = {params.row.admin} disabled/>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      {console.log(data)}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
