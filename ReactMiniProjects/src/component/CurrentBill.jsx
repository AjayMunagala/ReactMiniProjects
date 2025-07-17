import React, { useRef, useState } from "react";

const CurrentBill = () => {
    const billamount = useRef();
    const [total,settotal]= useState();

    const NetAmount=()=>{
        let num = parseInt(billamount.current.value)

        num<= 100?settotal("No Charge"):num >100 && num <=200 ? settotal(num*1):settotal(num*5);
    }
            
  return (
    <div>
        <input type='number' placeholder="Enter the no.of units used" ref={billamount}></input><br></br>
        <h4>{total}</h4>
        <input type = "button"  value="calculate NetAmount" onClick={NetAmount}></input>
      
    </div>
  )
}

export default CurrentBill
