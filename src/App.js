// import "./App.css";
import CompanyData from "./components/CompanyData";
import EmployeeData from "./components/EmployeeData";
import React, { useState } from "react";
import ResultTable from "./components/ResultTable";

function App() {
  const [numberOfEmployees, setnumberOfEmployees] = useState(0);
  const [employeeInformation, setEmployeeInformation] = useState([]);
  const [companyInformation, setCompanyInformation] = useState({
    name: "",
    email: "",
    numberOfEmployees: "",
    description: "",
  });
  const [results, setResults] = useState(false);

  function* iterator(obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (Object(value) !== value) yield [obj, key, value];
      else yield* iterator(value);
    }
  }

  const submitData = () => {
    const information = employeeInformation.map((employee) => {
      for (let [obj, key, value] of iterator(employee)) {
        if (key === "message" && value === "") obj[key] = "Field cannot be empty";
      }
      return employee;
    });
    console.log(information);
    setEmployeeInformation(information);
  };

  return (
    <div>
      {results ? (
        <div className="App">
          <ResultTable
            companyInformation={companyInformation}
            employeeInformation={employeeInformation}
          ></ResultTable>
        </div>
      ) : (
        <div className="App">
          <CompanyData
            companyInformation={companyInformation}
            setCompanyInformation={setCompanyInformation}
            setEmployeeInformation={setEmployeeInformation}
            employeeInformation={employeeInformation}
            numberOfEmployees={numberOfEmployees}
            setnumberOfEmployees={setnumberOfEmployees}
            submitData={submitData}
          ></CompanyData>
          <EmployeeData
            setEmployeeInformation={setEmployeeInformation}
            employeeInformation={employeeInformation}
          ></EmployeeData>
        </div>
      )}
    </div>
  );
}

export default App;
