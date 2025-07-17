import "./EmployeeData.css";
import React, { useState } from "react";

const EmployeeData = () => {
    const [empid, setEmpId]=useState("");
    const [empfullname, setEmpFullName]= useState("");
    const [emporggmail, setEmpOrgGmail]= useState("");
    const [empdesignation, setEmpDesignation]= useState("");
    const [empsalary, setEmpSalary]= useState(0);
    const [employeedata, setEmployeeData]= useState([]);
    const fun = ()=>{
        if(!empid.trim() && empfullname.trim() && emporggmail.trim() && empdesignation.trim() && empsalary) return; 
        const empobj = {
            empid, 
            empfullname, 
            emporggmail,
            empdesignation,
            empsalary
        }
        setEmployeeData([...employeedata,empobj]);
        setEmpId("");
        setEmpFullName("");
        setEmpOrgGmail("");
        setEmpDesignation("");
        setEmpSalary("");

        }
      return (
    <div>
            <h3>Employee Details</h3>
    <div className="data">
    

      <div className="horz">
      <label htmlFor="empid" >Emp id  :</label>
      <input type ="text" id="empid" placeholder="Enter the Employee id" onChange={(e)=>setEmpId(e.target.value)} value={empid}></input>
      </div> 

      <div className="horz">
      <label htmlFor ="empfullname">Emp FullName :</label>
      <input type = "text" id ="empfullname" placeholder="Enter Employee FullName" onChange={(e)=>setEmpFullName(e.target.value)} value={empfullname} ></input>
      </div>

      <div className="horz">
      <label htmlFor="emporggmail">Emp ORg Gmail :</label>
      <input type="text" id = "emporggmail" placeholder="Enter Employee Mail Id" onChange={(e)=>setEmpOrgGmail(e.target.value)} value={emporggmail}></input>
      </div>

      <div className="horz">
      <label htmlFor="empdesignation">Emp Designation :</label>
      <input type="text" id = "empdesignation" placeholder="Enter Employee Designation" onChange={(e)=>setEmpDesignation(e.target.value)} value={empdesignation}></input>
      </div>

      <div className="horz">
      <label htmlFor="empsalary">Emp Salary :</label>
      <input type="number" id = "empsalary" placeholder="Enter the Employee Salary" onChange={(e)=>setEmpSalary(e.target.value)} value={empsalary}></input>
      </div>
      <div>
        <button onClick={fun}>Add Data</button>
      </div>
      </div>
      <table border={5} align="center">
        <thead>
            <tr>
                <th>S.NO</th>
                <th>Employee Id</th>
                <th>Employeee Name</th>
                <th>Employee E-Mail</th>
                <th>Employee Designation</th>
                <th>Employee Salary</th>
            </tr>
        </thead>
        <tbody>
            {(employeedata.length===0)?(<tr><td colSpan={6}> No Record!...........</td></tr>):
            (
                employeedata.map((n,i)=>{
                    return(
                        <tr>
                            <td>{i+1}</td>
                            <td>{n.empid}</td>
                            <td>{n.empfullname}</td>
                            <td>{n.emporggmail}</td>
                            <td>{n.empdesignation}</td>
                            <td>{n.empsalary}</td>
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

export default EmployeeData
