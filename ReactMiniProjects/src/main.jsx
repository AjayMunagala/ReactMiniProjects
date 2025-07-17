import "./index.css";
import App from "./App.jsx";
import CurrentBill from "./component/CurrentBill.jsx";
import EmployeeData from "./component/EmployeeData.jsx";
import Even_odd from "./component/Even_odd.jsx";
import Grade from "./component/Grade.jsx";
import Positornegi from "./component/Positornegi.jsx";
import Report from "./component/Report.jsx";
import StudentReg from "./component/StudentReg.jsx";
import ToDoList from "./component/ToDoList.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Even_odd />
    <Positornegi />
    < Report />
    < Grade />
    < CurrentBill /> 
    < ToDoList /> 
    < StudentReg /> */
    < EmployeeData />
    
    }
     

    
    
   
    
  
  </StrictMode>,
)
