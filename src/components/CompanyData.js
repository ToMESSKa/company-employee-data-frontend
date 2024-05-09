import TextForm from "./TextForm";
import "../App.css";
import NumberOfEmployeesForm from "./NumberOfEmployeesForm";
import ValidationMessage from "./ValidationMessage";
import React, { useState } from "react";

function CompanyData(props) {
  const [companyNameMessage, setcompanyNameMessage] = useState(0);

  const checkCompanyName = (input) => {
    input === ""
      ? setcompanyNameMessage("Field cannot be empty")
      : setcompanyNameMessage("OK");
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
      <TextForm label={"e-mail"} name={"e-mail"}></TextForm>
      <NumberOfEmployeesForm
        setnumberOfEmployees={props.setnumberOfEmployees}
        label={"number of employees"}
        name={"number-of-employees"}
      ></NumberOfEmployeesForm>
      <TextForm label={"description"} name={"description"}></TextForm>
    </div>
  );
}

export default CompanyData;
