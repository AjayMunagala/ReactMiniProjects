import React, { useState } from "react";

const StudentReg = () => {
    const [studentName, setStudentName]= useState("");
    const [studentdata, setStudentData]= useState([]);
    const fun = ()=>{
        if(!studentName.trim() )return;
        setStudentData([...studentdata,{studentName}])
        setStudentName("")

    }
  return (
    <div>
      <input type ="text"
      placeholder="Enter the Student Name"
      onChange={(e)=>{setStudentName(e.target.value)}}
      value={studentName}
      ></input>
      <button onClick={fun}>Add</button><br></br><br></br>
      <table border={2} align="center">
        <thead>
           <tr>
            <th>S.No</th>
            <th>Name of the Student</th>
           </tr>
        </thead>
        <tbody>
          
            {
              (studentdata.length===0)?(<tr><td colSpan={2}>No data!......</td></tr>):
              (
                studentdata.map((n,i)=>{
                  return(
                    <tr>
                      <td>{i + 1}</td>
                      <td>{n.studentName}</td>
                    </tr>
                  )
                })
              )
              
            }
          
        </tbody>
      </table>
    </div>
  )
}

export default StudentReg
