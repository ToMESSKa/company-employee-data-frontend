// import "./App.css";
import CompanyData from "./components/CompanyData";
import EmployeeData from "./components/EmployeeData";
import React, { useState } from 'react';

function App() {

  const [numberOfEmployees, setnumberOfEmployees] = useState(0);

  return (
    <div className="App">
        <CompanyData numberOfEmployees={numberOfEmployees} setnumberOfEmployees={setnumberOfEmployees} ></CompanyData>
        <EmployeeData numberOfEmployees={numberOfEmployees}></EmployeeData>
    </div>
  );
}

export default App;
