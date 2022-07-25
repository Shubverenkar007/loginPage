import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import './DateSet.css'

const DateSet = () => {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const getDuration = (e) => {
    e.preventDefault();
    const duration = e.target.value;

    let fromDateCopy = fromDate;
    // converting from date in mili-secounds
    const fromDateInMS = fromDateCopy.getTime();

    // concerting duration days in mili-secounds(1day = 86400000ms)
    const durationInMS = duration * 86400000;

    // adding from day in ms to duration in ms
    const finalDate = fromDateInMS + durationInMS;
    setToDate(new Date(finalDate));
  };
  return (
    <div>
      <h1>Select start date and duration of days</h1>
      <label>From</label><br/>
      <DateTimePicker className='date-time-picker' onChange={setFromDate} value={fromDate} /><br/>
      <label>Duration of days</label><br/>
      <input type="text" onChange={getDuration} /><br/>
      <label>To</label><br/>
      <DateTimePicker className='date-time-picker'  value={toDate} /><br/>
    </div>
  );
};

export default DateSet;
