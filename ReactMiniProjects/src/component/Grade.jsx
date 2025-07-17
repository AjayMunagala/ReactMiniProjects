import React, { useRef, useState } from "react";

const Grade = () => {
    const marks = useRef();
    let [assigngrade, setassigngrade] = useState();
    const findgrade=()=>{
        let num=parseInt(marks.current.value)
        num > 90?setassigngrade("you got A"):(num < 90 && num >= 75)? setassigngrade("you  got B"):
        (num<75&& num>=50)?setassigngrade("you got c"):setassigngrade("you got D");
        

    }

  return (
    <div>
        <input type='number' ref={marks} placeholder="Enter the total marks obtained"></input><br></br>
        <h3>{assigngrade}</h3>
        <input type="button" value="Find Grade" onClick={findgrade} ></input>
      
    </div>
  )
}

export default Grade
