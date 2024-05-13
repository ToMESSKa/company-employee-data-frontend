// import "./App.css";
import CompanyData from "./components/CompanyData";
import EmployeeData from "./components/EmployeeData";
import React, { useState } from "react";
import ResultTable from "./components/ResultTable";
import axios from "axios";

function App() {
  const [numberOfEmployees, setnumberOfEmployees] = useState(0);
  const [employeeInformation, setEmployeeInformation] = useState([]);
  const [companyInformation, setCompanyInformation] = useState([
    {
      name: { inputValue: "", message: "", req: true },
      email: { inputValue: "", message: "", req: true },
      numberOfEmployees: { inputValue: "", message: "", req: true },
      description: { inputValue: "", message: "", req: false },
    },
  ]);
  const [results, setResults] = useState(false);
  const [cvs, setCVs] = useState([]);

  function* iterator(obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (Object(value) !== value) yield [obj, key, value];
      else yield* iterator(value);
    }
  }

  const submitData = () => {
    // if (
    //   checkInformation(employeeInformation, setEmployeeInformation) &&
    //   checkInformation(companyInformation, setCompanyInformation)
    // ) {
    //   setResults(true);
    // }

    console.log(cvs);
    for (let item of cvs) {
      onFileUpload(item);
    }
  };

  const checkInformation = (info, setInfo) => {
    let noError = true;
    const information = info.map((employee) => {
      for (let [obj, key, value] of iterator(employee)) {
        if (key === "message" && value === "" && obj.req === true)
          obj[key] = "Field cannot be empty";
        else if (key === "message" && value !== "OK" && obj.req === true)
          noError = false;
      }
      return employee;
    });
    console.log(information);
    setInfo(information);
    return noError;
  };

  const onFileUpload = (item) => {
    console.log("hi");
    const formData = new FormData();
    formData.append("myFile", item);
    axios.post("http://localhost:3000/api/uploadfile", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  const onFileDownload = (e) => {
    axios
      .get("http://localhost:3000/resume", { responseType: "blob" })
      .then((res) => {
        let alink = document.createElement("a");
        alink.href = URL.createObjectURL(res.data);
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
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
            cvs={cvs}
            setCVs={setCVs}
            setEmployeeInformation={setEmployeeInformation}
            employeeInformation={employeeInformation}
          ></EmployeeData>
        </div>
      )}
    </div>
  );
}

export default App;
