import TextForm from "./TextForm";
import "../App.css";
import NumberOfEmployeesForm from "./NumberOfEmployeesForm";
import React, { useState } from "react";
import axios from "axios";
import download from "downloadjs";

function CompanyData(props) {
  const [companyNameMessage, setcompanyNameMessage] = useState();
  const [emailMessage, setEmailMessage] = useState();
  const [numberOfEmployeesMessage, setnumberOfEmployeesMessage] = useState();
  const [numberOfEmployees, setnumberOfEmployees] = useState(0);

  const [file, setFile] = useState();

  const checkCompanyName = (input) => {
    input.trim() === ""
      ? setcompanyNameMessage("Field cannot be empty")
      : setcompanyNameMessage("OK");
    const newCompany = { ...props.companyInformation };
    newCompany.name = input;
    props.setCompanyInformation(newCompany);
  };

  const checkEmail = (input) => {
    !input
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? setEmailMessage("Must be valid e-mail address")
      : setEmailMessage("OK");
    const newCompany = { ...props.companyInformation };
    newCompany.email = input;
    props.setCompanyInformation(newCompany);
  };

  const checkNumberOfEmployees = (input) => {
    if (
      input !== "" &&
      !isNaN(input) &&
      parseInt(input) >= 1 &&
      parseInt(input) <= 100
    ) {
      createEmployeeInformation(parseInt(input));
      setnumberOfEmployeesMessage("OK");
      const newCompany = { ...props.companyInformation };
      newCompany.numberOfEmployees = parseInt(input);
      props.setCompanyInformation(newCompany);
    } else {
      setnumberOfEmployeesMessage("Must be between 1 and 100");
    }
  };

  const addNewEmployees = (employeesToCreate, id) => {
    let employeeInformation = [...props.employeeInformation];
    for (let i = 1; i <= employeesToCreate; i++) {
      let employee = {
        Employee: {
          employeeID: id,
          name: { inputValue: "", message: "", req: true },
          age: { inputValue: "", message: "", req: true },
          email: { inputValue: "", message: "", req: true },
          jobTitle: { inputValue: "", message: "", req: true },
          cv: { inputValue: "", message: "OK" },
        },
      };
      employeeInformation.push(employee);
      id = id + 1;
    }
    console.log(employeeInformation);
    props.setEmployeeInformation(employeeInformation);
  };

  const createEmployeeInformation = (input) => {
    let employeesToCreate = 0;
    let id = 1;
    if (numberOfEmployees === 0) {
      employeesToCreate = input;
      setnumberOfEmployees(employeesToCreate);
      addNewEmployees(employeesToCreate, id);
    } else if (input > numberOfEmployees) {
      employeesToCreate = input - numberOfEmployees;
      id = numberOfEmployees + 1;
      setnumberOfEmployees(input);
      addNewEmployees(employeesToCreate, id);
    } else {
      let employeesToRemove = numberOfEmployees - input;
      let employeeInformation = [...props.employeeInformation];
      setnumberOfEmployees(input);
      for (let i = 1; i <= employeesToRemove; i++) {
        employeeInformation.pop();
        props.setEmployeeInformation(employeeInformation);
      }
    }
  };

  const onFileUpload = (e) => {
    console.log("hi");
    const formData = new FormData();
    formData.append("myFile", e.target.files[0]);

    axios.post("http://localhost:3000/api/uploadfile", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    }); //I need to change this line
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
    <div className="data-section">
      <div className="data-section-title">Company data:</div>
      <TextForm
        message={companyNameMessage}
        formValidationFunction={checkCompanyName}
        label={"name"}
        name={"name"}
      ></TextForm>
      <TextForm
        message={emailMessage}
        formValidationFunction={checkEmail}
        label={"e-mail"}
        name={"e-mail"}
      ></TextForm>
      <NumberOfEmployeesForm
        message={numberOfEmployeesMessage}
        formValidationFunction={checkNumberOfEmployees}
        label={"number of employees"}
        name={"number-of-employees"}
      ></NumberOfEmployeesForm>
      <TextForm label={"description"} name={"description"}></TextForm>
      <div className="submit-button-container">
        <button className="button" onClick={(e) => props.submitData()}>
          Submit
        </button>
      </div>
      <div>
        <label for="myfile">Select a file:</label>
        <input
          onChange={(e) => onFileUpload(e)}
          type="file"
          id="myfile"
          name="myfile"
        ></input>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            onFileDownload();
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default CompanyData;
