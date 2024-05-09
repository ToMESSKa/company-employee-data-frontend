import TextForm from "./TextForm";
import "../App.css";
import JobTitleForm from "./JobTitleForm";
import React, { useState } from "react";

function EmployeeData(props) {

  const [ageMessage, setAgeMessage] = useState();

  const checkAge = (input) => {
    input < 18
      ? setAgeMessage("Must be over 18 years old")
      : setAgeMessage("OK");
  };

  return (
    <div className="data-section">
      <div className="data-section-title">Employee data:</div>
      {Array(props.numberOfEmployees).fill(
        <div className="employee-data">
          <TextForm label={"name"} name={"name"}></TextForm>
          <TextForm label={"e-mail"} name={"e-mail"}></TextForm>
          <TextForm 
          message={ageMessage}
          formValidationFunction={checkAge}
          label={"age"} name={"age"}></TextForm>
          <JobTitleForm label={"job-title"}></JobTitleForm>
        </div>
      )}
    </div>
  );
}

export default EmployeeData;
