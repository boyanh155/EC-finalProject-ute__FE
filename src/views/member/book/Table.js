import React, { useState } from "react";

const Table = () => {
  const [totalTables, setTotalTables] = useState([]);
  // member selection
  const [selection, setSelection] = useState({
    table: {
      name: null,
      id: null,
    },
    date: new Date(),
    time: null,
    location: "Any Location",
    size: 0,
  });
  // member booking
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
  });
  //potential Locations and times
  const [location] = useState(["Any Location", "Floor 1", "Floor 2", "Ground"]);
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
    let time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
    console.log(time);
    const datetime = new Date(date + " " + time);
    return datetime;
  };
  //Baisc reservation "validation"
  const [reservationError, setReservationError] = useState(false);
  const getEmptyTables = () => {
    let tables = totalTables.filter((table) => table.isAvailable);
    return tables.length;
  };
  return <div>Table</div>;
};

export default Table;
