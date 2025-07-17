import React, { useRef, useState } from "react";

const Even_odd = () => {
    const type = useRef();
    let [result, setresult]=useState("");
    const findevenorodd=()=>{
        parseInt(type.current.value) % 2===0 ? setresult('Number is Even'): setresult('Number is Odd');
           }
  return (
    <div>
        <p>Enter a Number</p>
        <input autoFocus ref={type} type='number'  placeholder="Enter a Number"></input>
        <input type="button" onClick={findevenorodd} value="Click Here" ></input>
        <p>{result}</p>
        
    </div>
  )
}

export default Even_odd
