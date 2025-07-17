import React, { useState } from "react";

const ToDoList = () => {
    const [taskname, setTaskName]= useState("");
    const [tasklist, setTaskList]= useState([]);
    const fun = ()=>{
      if(!taskname.trim()) return;
      setTaskList([...tasklist,{taskname}])
      setTaskName("");


    }
  return (
    <div>
        <input  type = "text" placeholder="Enter the task" onChange={(e)=>{setTaskName(e.target.value)}} value={taskname}></input>
        <input type ="button" onClick={fun} value="click"></input>
        <ul>
          {(tasklist.length===0)?(<li>No Task Added yet</li>):(
          tasklist.map((task, index)=>{
            return <li>.{index+1}.{task.taskname}</li>

          }))
          }

        </ul>
        
    
    </div>
  )
}

export default ToDoList
