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
    const newCompany = [...props.companyInformation];
    newCompany[0].name.inputValue = input;
    if (input.trim() === "") {
      newCompany[0].name.message = "Field cannot be empty";
    } else {
      newCompany[0].name.message = "OK";
    }
    props.setCompanyInformation(newCompany);
  };

  const checkEmail = (input) => {
    const newCompany = [...props.companyInformation];
    newCompany[0].email.inputValue = input;
    if (
      !input
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      newCompany[0].email.message = "Must be valid e-mail address";
    } else {
      newCompany[0].email.message = "OK";
    }
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
      const newCompany = [...props.companyInformation];
      newCompany[0].numberOfEmployees.inputValue = parseInt(input);
      newCompany[0].numberOfEmployees.message = "OK";
      props.setCompanyInformation(newCompany);
    } else {
      setnumberOfEmployeesMessage("Must be a number between 1 and 100");
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
          cv: { inputValue: "", message: "", req: false },
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
        message={props.companyInformation[0].name.message}
        formValidationFunction={checkCompanyName}
        label={"name"}
        name={"name"}
      ></TextForm>
      <TextForm
        message={props.companyInformation[0].email.message}
        formValidationFunction={checkEmail}
        label={"e-mail"}
        name={"e-mail"}
      ></TextForm>
      <NumberOfEmployeesForm
        message={props.companyInformation[0].numberOfEmployees.message}
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
    </div>
  );
}

export default CompanyData;
