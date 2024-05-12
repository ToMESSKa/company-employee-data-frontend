import TextForm from "./TextForm";
import "../App.css";
import NumberOfEmployeesForm from "./NumberOfEmployeesForm";
import React, { useState } from "react";
import axios from "axios";

function CompanyData(props) {
  const [companyNameMessage, setcompanyNameMessage] = useState();
  const [emailMessage, setEmailMessage] = useState();
  const [numberOfEmployeesMessage, setnumberOfEmployeesMessage] = useState();
  const [numberOfEmployees, setnumberOfEmployees] = useState(0);

  const [file, setFile] = useState();

  function handleSubmit(event) {
    // event.preventDefault()
    // const url = 'http://localhost:3000/uploadfile';
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('fileName', file.name);
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };
    // axios.post(url, formData, config).then((response) => {
    //   console.log(response.data);
    // });
  }

  const checkCompanyName = (input) => {
    input === ""
      ? setcompanyNameMessage("Field cannot be empty")
      : setcompanyNameMessage("OK");
  };

  const checkEmail = (input) => {
    input
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? setEmailMessage("OK")
      : setEmailMessage("Must be valid e-mail address");
  };

  const printN = (input) => {
    console.log(props.employeeInformation);
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
          name: { inputValue: "", message: "" },
          age: { inputValue: "", message: "" },
          email: { inputValue: "", message: "" },
          cv: { inputValue: "", message: "" },
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
      <button onClick={(e) => printN()}>Click</button>
    </div>
  );
}

export default CompanyData;
