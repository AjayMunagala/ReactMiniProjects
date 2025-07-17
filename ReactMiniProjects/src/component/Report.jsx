import React, { useRef, useState } from "react";

const Report = () => {
        const sub1=useRef();
        const sub2=useRef();
        const sub3=useRef();
        const [sum,setsum]=useState();
        let findTotal=()=>{
            let num1=parseInt(sub1.current.value);
            let num2=parseInt(sub2.current.value);
            let num3 = parseInt(sub3.current.value);
            setsum(`total marks:${num1+num2+num3}`);
        }
  return (
    <div>
        <input type="number" placeholder="Enter subject1 marks" ref={sub1}></input><br></br>
        <input type="number" placeholder="Enter subject2 marks" ref={sub2}></input><br></br>
        <input type="number" placeholder="Enter subject3 marks" ref={sub3}></input><br></br>
        <h5>{sum}</h5>
        <input type="button" value="total" onClick={findTotal}></input>
      
    </div>
  )
}

export default Report
