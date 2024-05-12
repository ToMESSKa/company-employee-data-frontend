// import "./App.css";
import CompanyData from "./components/CompanyData";
import EmployeeData from "./components/EmployeeData";
import React, { useState } from "react";

function App() {
  const [numberOfEmployees, setnumberOfEmployees] = useState(0);
  const [employeeInformation, setEmployeeInformation] = useState([]);

  return (
    <div className="App">
      <CompanyData
        setEmployeeInformation={setEmployeeInformation}
        employeeInformation={employeeInformation}
        numberOfEmployees={numberOfEmployees}
        setnumberOfEmployees={setnumberOfEmployees}
      ></CompanyData>
      <EmployeeData
        setEmployeeInformation={setEmployeeInformation}
        employeeInformation={employeeInformation}
      ></EmployeeData>
    </div>
  );
}

export default App;
