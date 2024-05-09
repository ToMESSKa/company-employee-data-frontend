import TextForm from "./TextForm";
import "../App.css";
import NumberOfEmployeesForm from "./NumberOfEmployeesForm";
import ValidationMessage from "./ValidationMessage";
import React, { useState } from "react";

function CompanyData(props) {
  const [companyNameMessage, setcompanyNameMessage] = useState();
  const [emailMessage, setEmailMessage] = useState();
  const [numberOfEmployeesMessage, setnumberOfEmployeesMessage] = useState();

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
      props.setnumberOfEmployees(parseInt(input));
      setnumberOfEmployeesMessage("OK");
    } else {
      props.setnumberOfEmployees(0);
      setnumberOfEmployeesMessage("Must be between 1 and 100");
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
        // setnumberOfEmployees={props.setnumberOfEmployees}
        message={numberOfEmployeesMessage}
        formValidationFunction={checkNumberOfEmployees}
        label={"number of employees"}
        name={"number-of-employees"}
      ></NumberOfEmployeesForm>
      <TextForm label={"description"} name={"description"}></TextForm>
    </div>
  );
}

export default CompanyData;
