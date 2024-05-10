import TextForm from "./TextForm";
import "../App.css";
import NumberOfEmployeesForm from "./NumberOfEmployeesForm";
import React, { useState } from "react";
import axios from "axios";

function CompanyData(props) {
  const [companyNameMessage, setcompanyNameMessage] = useState();
  const [emailMessage, setEmailMessage] = useState();
  const [numberOfEmployeesMessage, setnumberOfEmployeesMessage] = useState();

  const [file, setFile] = useState();

  function handleChange(event) {
    if (event.target.files[0]["name"].split(".").pop() === "pdf") {
      console.log("HZZZ");
      setFile(event.target.files[0]);
    } else {
      console.log("error");
      console.log(file);
    }
  }

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

  const checkNumberOfEmployees = (input) => {
    if (
      input !== "" &&
      !isNaN(input) &&
      parseInt(input) >= 1 &&
      parseInt(input) <= 100
    ) {
      createEmployeeValidationMessages(parseInt(input));
      setnumberOfEmployeesMessage("OK");
    } else {
      setnumberOfEmployeesMessage("Must be between 1 and 100");
    }
  };

  const createEmployeeValidationMessages = (input) => {
    let createEmployeeValidationMessages = [];
    for (let i = 1; i <= input; i++) {
      let employee = { employeeID: i, name: "", age: "", email: "", cv: "" };
      createEmployeeValidationMessages.push(employee);
    }
    props.setEmployeeValidationMessages(createEmployeeValidationMessages);
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

      <form>
        <input onChange={handleChange}type="file" name="file" id="file" class="inputfile" />
        <label for="file">Click to upload CV</label>
      </form>
    </div>
  );
}

export default CompanyData;
