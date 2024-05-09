import TextForm from "./TextForm";
import "../App.css";
import JobTitleForm from "./JobTitleForm";
import React, { useState } from "react";

function EmployeeData(props) {
  const checkEmployeeName = (value, id) => {
    const employeeValidationMessages = props.employeeValidationMessages.map(
      (employee) => {
        if (employee.employeeID === id && value === "") {
          return { ...employee, name: "Field cannot be empty" };
        } else if (employee.employeeID === id) {
          return { ...employee, name: "OK" };
        }
        return employee;
      }
    );
    props.setEmployeeValidationMessages(employeeValidationMessages);
  };

  const checkEmployeeEmail = (value, id) => {
    let emailMessage = "";
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? (emailMessage = "OK")
      : (emailMessage = "Must be valid e-mail address");
    const employeeValidationMessages = props.employeeValidationMessages.map(
      (employee) => {
        if (employee.employeeID === id) {
          return { ...employee, email: emailMessage };
        }
        return employee;
      }
    );
    props.setEmployeeValidationMessages(employeeValidationMessages);
  };

  const checkEmployeeAge = (value, id) => {
    let ageMessage = 0;
    value >= 18
      ? (ageMessage = "OK")
      : (ageMessage = "Must be over 18 years old");
    const employeeValidationMessages = props.employeeValidationMessages.map(
      (employee) => {
        if (employee.employeeID === id) {
          return { ...employee, age: ageMessage };
        }
        return employee;
      }
    );
    props.setEmployeeValidationMessages(employeeValidationMessages);
  };

  return (
    <div className="data-section">
      <div className="data-section-title">Employee data:</div>
      {props.employeeValidationMessages.map((employee) => (
        <div className="employee-data">
          <TextForm
            message={employee.name}
            data={employee.employeeID}
            formValidationFunction={checkEmployeeName}
            label={"name"}
            name={"name"}
          ></TextForm>
          <TextForm
            data={employee.employeeID}
            message={employee.email}
            formValidationFunction={checkEmployeeEmail}
            label={"e-mail"}
            name={"e-mail"}
          ></TextForm>
          <TextForm
            data={employee.employeeID}
            message={employee.age}
            formValidationFunction={checkEmployeeAge}
            label={"age"}
            name={"age"}
          ></TextForm>
          <JobTitleForm label={"job-title"}> </JobTitleForm>
        </div>
      ))}
    </div>
  );
}

export default EmployeeData;
