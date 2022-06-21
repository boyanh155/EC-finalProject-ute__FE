import React,{useState,useEffect} from "react";
import "../../../assets/css/member/Book.css";
import "../../../assets/css/member/Main.css";

import {
  Col,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
//
//
const Table = React.lazy(() => import("./Table"));
const Book = (props) => {
  const [totalTables, setTotalTables] = useState([]);
  // Selection
  // member selection
  const [selection, setSelection] = useState({
    table: {
      name: null,
      id: null,
    },
    date: new Date(),
    time: null,
    location: "Any Location",
    // size: "Standard",
    size: 0,

  });
  // member booking
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
  });


  //Constructor
  //potential Locations and times
  const [location] = useState(["Any Location", "Floor 1", "Floor 2", "Ground"]);
  const [sizes] = useState(["Vip", "Standard"])
  const [times] = useState([
    "9AM",
    "10AM",
    "11AM",
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
  ]);
//   have not finished yet 
  const [staffs] = useState([
    {
        idStaff: "01",
        nameStaff: `Nguyen Thai Hung 01`,
        role: "leader",
    },
    {
        idStaff: "02",
        nameStaff: `Nguyen Thai Hung 02`,
        role: "staff",
    },
    {
        idStaff: "03",
        nameStaff: `Nguyen Thai Hung 03`,
        role: "staff",
    },
    {
        idStaff: "04",
        nameStaff: `Nguyen Thai Hung 04`,
        role: "admin",
    },
    {
        idStaff: "01",
        nameStaff: `Le Hoang Loc 01`,
        role: "leader",
    },
    {
        idStaff: "02",
        nameStaff: `Le Hoang Loc 02`,
        role: "staff",
    },
    {
        idStaff: "03",
        nameStaff: `Le Hoang Loc 03`,
        role: "staff",
    },
    {
        idStaff: "04",
        nameStaff: `Le Hoang Loc 04`,
        role: "admin",
    },
])
  const getDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date =
      months[selection.date.getMonth()] +
      " " +
      selection.date.getDate() +
      " " +
      selection.date.getFullYear();
      // 9AM vs 10 AM
      // 9       10
      let time = selection.time.slice(0,-2)
      time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
      // 
    const datetime = new Date(date + " " + time);
    return datetime;
  };
  //Baisc reservation "validation"
  const [reservationError, setReservationError] = useState(false);
  const getEmptyTables = () => {
    let tables = totalTables.filter((table) => table.isAvailable);
    return tables.length;
  };
  //call api
  let headers = {
    "Content-Type":"application/json"
  }
  useEffect(() =>{
    //Post data
    //selection from customer
    // DIY
    if(selection.time && selection.date){
        let dateTime = getDate()
        let body = {
          // date
          date:dateTime,
          // date:"Nov 10 2021 12:01"
        };
        (async()=>{
          await axios.post(`http://localhost:5000/api/book/availability`, body, {
            headers,
        }).then(res=>{
          let tables = res.data.data.tables.filter(table=>{
            return ((selection.size ? selection.size===table.capacity : true) 
            &&(selection.location !== "Any Location" ? table.location ===selection.location:true))
          }

          )  
          setTotalTables(tables);


        }).catch(err=>console.log(`Cant post get table : ${err.message}`));
        })();

        // 
        // postAvailability(body,headers).then((data)=>{
        //   console.log(` Halo sdasd`, data)
        //   //capacity : [Standard,Vip]
        //   let tables = data.data.data.tables.filter(table=>{
        //     (selection.size ? selection.size===table.capacity : true)
        //     (selection.location!== "Any Location " ? table.location ===selection.location
        //     :true
        //     );
        //   });
        // setTotalTables(tables);
        // }).catch(err=>{          
        //   console.log(`Cant post reservation : ${err.message}`);
        // });
    }
    // Copy
    // if (selection.time && selection.date) {
    //   (async _ => {
    //     let datetime = getDate();
    //     let res = await fetch("http://localhost:5000/api/book/availability", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         date: datetime
    //       })
    //     });
    //     res = await res.json();
    //     // Filter available tables with location and group size criteria
    //     let tables = res.data.tables.filter(table =>
    //         (selection.size > 0 ? table.capacity >= selection.size : true) &&
    //         (selection.location !== "Any Location"
    //           ? table.location === selection.location
    //           : true)
    //     );
    //     setTotalTables(tables);
    //   })();
    // }
  },[selection.time,selection.date,selection.size,selection.location])


    //Reserved 
    //Customer's contact
    const reserve = async()=>{
      // console.log(booking.email.length,booking.name.length,booking.phone.length)
      // console.log(booking)
      if((booking.email.length??booking.name.length??booking.phone.length) ===0){
        setReservationError(true)
        // console.log("Invalid data")
      }else{
          const dateTime = getDate()
        // console.log("Valid data")
          // console.log(dateTime)
          // console.log(selection)
          let body = {
            ...booking,
            date:dateTime,
            table:selection.table.id,
          }
          console.log(body)
          //post api
        await axios.post('http://localhost:5000/api/book/reserve',body,
        {
          headers,
        }).then((res)=>{
            // console.log(res)
            if(res.data.success){
              // console.log("Reserved")
              props.setPage(2)
            }
          }).catch(err=>{
            console.log(`Can't post reservation ${err.message}`)
          })
          // postReserver(body,headers).then((data)=>{
          //   console.log({
          //     success:true,
          //     message:data.data,
          //   })
          //   // nav to ThankYou.js
          //   props.setPage(2)
          // }).catch(err=>{
          //   console.log({
          //     success:false,
          //     message:err.message,
          //   })
          //   // nav to TryAgain.js
          //   props.setPage(2)
          // })
      }
    }
    // Select table
    const selectTable = (table_name,table_id)=>{
      setSelection({
        ...selection,
        table:{
          name:table_name,
          id:table_id,
        }
      })
    }

    //Handler data click
    //Sizes
    const handlerSizeDropDownClick=(type)=>{
      let newSel = {
        ...selection,
        table:{
          ...selection.table
        },
        size:type,
      }
      setSelection(newSel)
    }
    //Main
    // sizes = ["Vip", "Standard"]
    const getSizes = ()=>{
      let newSizes=[]
      sizes.forEach((type)=>{
          newSizes.push(
            <DropdownItem
            key={type}
            className="booking-dropdown-item"
            onClick={()=>handlerSizeDropDownClick(type)}
            >{type}</DropdownItem>
          )
      })
      return newSizes;
    }

    //Location
    //location=["Any Location", "Floor 1", "Floor 2", "Ground"]
    const handlerLocateDropDownClick=(locate)=>{
      let newSel = {
        ...selection,
        table:{
          ...selection.table
        },
        location:locate,
      }
      setSelection(newSel)
    }
    // Main
        const getLocations = ()=>{
          let newLocations = [];
          location.forEach((locate)=>{
            newLocations.push(
                <DropdownItem
                key={locate}
                className="booking-dropdown-item"
                onClick={()=>handlerLocateDropDownClick(locate)}
                >{locate}</DropdownItem>
              )
          })
          return newLocations;
        }
    // 
    //Time
    //times=["9AM","10AM","11AM","1AM","2AM","3AM","4AM","5AM"]
    const handlerTimeDropDownClick=(time)=>{
      let newSel = {
        ...selection,
        table:{
          ...selection.table
        },
        time:time,
      }
      setSelection(newSel)
    }
    // Main
        const getTimes = ()=>{
          let newTimes = [];
          times.forEach((time)=>{
            newTimes.push(
                <DropdownItem
                key={time}
                className="booking-dropdown-item"
                onClick={()=>handlerTimeDropDownClick(time)}
                >{time}</DropdownItem>
              )
          })
          return newTimes;
        }
    // get table
    const getTables = ()=>{
      if(getEmptyTables()>0){
        let tables =[]
        totalTables.forEach(table=>{
          if(table.isAvailable){
            tables.push(
              <Table
              key={table._id}
              id={table._id}
              tableSize={table.capacity}
              name={table.name}
              empty
              selectTable={selectTable}
              />
            )
          }
          else{
            tables.push(
              <Table
              key={table._id}
              id={table._id}
              tableSize={table.capacity}
              name={table.name}
              selectTable={selectTable}
              />
            )
          }
        })
        return tables;
      }
    }
  return <div>
    {/* Title */}
      <Row noGutters className="text-center align-items-center pizza-cta">
        {/* Book table button */}
        <Col>
            <p className="looking-for-table book-table-bt">
              <span>
              {!selection.table.id ?"Book a table" : "Confirm Reservation"}
              </span>
            </p>
            <p className="selected-table">
              {selection.table.id ?"You are booking table" + selection.table.name : null}
            </p>
            {
              reservationError ?(
                <p className="reservation-error">
                    *Please fill out all of the details
                </p>
              ):null
            }
        </Col>
      </Row>
      {/* Select Box */}
      {!selection.table.id ? 
        // Customer's select option
      <div className="reservation-stuff">
        {/* Select time */}
            <Row noGutters className="text-center align-items-center">
        {/* Select date */}
              <Col xs="12" sm="3" style={{}}>
              <input type="date" 
              required="required"
              className="booking-dropdown"
              value={selection.date.toISOString().split("T")[0]}
              onChange={e=>{
                if(!isNaN(new Date(new Date (e.target.value)))){
                  let newSel ={
                    ...selection,
                    table:{
                      ...selection.table
                    },
                    date:new Date(e.target.value)
                  }
                  setSelection(newSel)
                }else{
                  console.log("Invalid date")
                  let newSel ={
                    ...selection,
                    table:{
                      ...selection.table
                    },
                    date:new Date()
                  }
                  setSelection(newSel)
                }
              }}
              />
              </Col>
              {/*  */}
        {/* Select hours */}
              <Col xs="12" sm="3">
                <UncontrolledDropdown>
                  <DropdownToggle color="none" caret className="booking-dropdown">
                      {selection.time===null ?"Select time":selection.time}
                  </DropdownToggle>
                  <DropdownMenu
                  right
                  className="booking-dropdown-menu"
                  >
                    {getTimes()}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              {/*  */}
                      {/* Select location */}
                      <Col xs="12" sm="3">
                <UncontrolledDropdown>
                  <DropdownToggle color="none" caret className="booking-dropdown">
                      {selection.location===null ?"Select location":selection.location}
                  </DropdownToggle>
                  <DropdownMenu
                  right
                  className="booking-dropdown-menu"
                  >
                    {getLocations()}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              {/*  */}
                                    {/* Select location */}
                                    <Col xs="12" sm="3">
                <UncontrolledDropdown>
                  <DropdownToggle color="none" caret className="booking-dropdown">
                      {selection.size===0 ?"Select table type":selection.size}
                  </DropdownToggle>
                  <DropdownMenu
                  right
                  className="booking-dropdown-menu"
                  >
                    {getSizes()}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              {/*  */}
            </Row>
            {/* Display table */}
            <Row noGutters className="table-display">
              <Col>
              {/* Number of table */}
                {getEmptyTables()>0 ? <p className="available-table">
                  {getEmptyTables()} available
                </p>:null
                }
                
                {selection.date && selection.time ?(
                    getEmptyTables()>0 ?(
                      <div>
                        <div className="table-key">
                          {/* Table Row */}
                          <Row noGutters>
                              {getTables()}
                          </Row>
                        </div>
                      </div>
                    ):(<p className="table-display-message">No available table</p>)

                ):(<p>Please select a date and time for your reservation <i class="fas fa-exclamation-circle"></i></p>)}
              </Col>      
            </Row>
      </div>
      :(
        // Confirm customer contact info
        // List contact info
        <div id="confirm-reservation-stuff">
          <Row noGutters className="text-center justify-content-center reservation-details-container">
              {/* Name */}
              <Col cs="12" sm="3" className="reservation-details">
                <Input
                  type="text"
                  bsSize="lg"
                  placeholder="Name"
                  className="reservation-input"
                  value={booking.name}
                  onChange={
                    e=>{
                      setBooking({
                        ...booking,
                        name:e.target.value
                      })
                    }

                  } 
                />
              </Col>
              {/*  */}
                            {/* Phone */}
                            <Col cs="12" sm="3" className="reservation-details">
                <Input
                  type="text"
                  bsSize="lg"
                  placeholder="Phone"
                  className="reservation-input"
                  value={booking.phone}
                  onChange={
                    e=>{
                      setBooking({
                        ...booking,
                        phone:e.target.value
                      })
                    }

                  } 
                />
              </Col>
              {/*  */}
                            {/* Email */}
                            <Col cs="12" sm="3" className="reservation-details">
                <Input
                  type="email"
                  bsSize="lg"
                  placeholder="Email"
                  className="reservation-input"
                  value={booking.email}
                  onChange={
                    e=>{
                      setBooking({
                        ...booking,
                        email:e.target.value
                      })
                    }

                  } 
                />
              </Col>
              {/*  */}
          </Row>
          {/* Confirm book bt */}
          <Row noGutters className="text-center">
                  <Col>
                    <Button
                    color="none"
                    className="book-table-btn"
                    onClick={()=>{
                      reserve()
                    }}
                    >
                      Book now
                    </Button>
                  </Col>

          </Row>
          {/*  */}
        </div>
      )
      }

  </div>;
};

export default Book;
