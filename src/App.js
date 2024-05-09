// import "./App.css";
import CompanyData from "./components/CompanyData";
import EmployeeData from "./components/EmployeeData";
import React, { useState } from "react";

function App() {
  const [numberOfEmployees, setnumberOfEmployees] = useState(0);
  const [employeeValidationMessages, setEmployeeValidationMessages] = useState([]);

  return (
    <div className="App">
      <CompanyData
        setEmployeeValidationMessages={setEmployeeValidationMessages}
        employeeValidationMessages={employeeValidationMessages}
        numberOfEmployees={numberOfEmployees}
        setnumberOfEmployees={setnumberOfEmployees}
      ></CompanyData>
      <EmployeeData
        setEmployeeValidationMessages={setEmployeeValidationMessages}
        employeeValidationMessages={employeeValidationMessages}
      ></EmployeeData>
    </div>
  );
}

export default App;
