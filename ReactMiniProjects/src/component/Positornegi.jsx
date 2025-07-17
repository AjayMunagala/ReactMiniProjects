import React, { useRef, useState } from "react";

const Positornegi = () => {
    const number = useRef();
    let [numtype,setnumtype]=useState(" ");
    const checknumber=()=>{
        let num = parseInt(number.current.value);
        num === 0 ?setnumtype("enter number > 0"):
        num > 0 ? setnumtype("Number is positive "):
        num <0 ? setnumtype("Number is negative"):
        setnumtype("please enter the number!...")

        
    }

  return (
    <div>
      <input type = "number" placeholder="Enter a Number to check pos or neg" ref={number}></input>
      <input type="button" onClick={checknumber} value=" click +ve or -ve"></input>
      <p>{numtype}</p>
    </div>
  )
}

export default Positornegi
