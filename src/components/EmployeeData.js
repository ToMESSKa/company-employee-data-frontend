import TextForm from "./TextForm";
import "../App.css";
import JobTitleForm from "./JobTitleForm";
import React, { useState } from "react";
import CVUpload from "./CVUpload";

function EmployeeData(props) {
  
  const checkJobTitle = (input, id) => {
    let jobTitleMessage = "";
    input !== ""
      ? (jobTitleMessage = "OK")
      : (jobTitleMessage = "A job title must be selected");
    const employeeInformation = props.employeeInformation.map((employee) => {
      if (employee.Employee.employeeID === id) {
        return {
          ...employee,
          Employee: {
            ...employee.Employee,
            jobTitle: {
              ...employee.Employee.jobTitle,
              message: jobTitleMessage,
              inputValue: input,
            },
          },
        };
      }
      return employee;
    });
    props.setEmployeeInformation(employeeInformation);
  };

  const checkCV = (file, id) => {
    let fileformat = file["name"].split(".").pop();
    let cvMessage = "";
    console.log(file);
    fileformat === "pdf" ? (cvMessage = "OK") : (cvMessage = "Must be a pdf!");
    const employeeInformation = props.employeeInformation.map((employee) => {
      if (employee.Employee.employeeID === id) {
        if (cvMessage === "OK") {
          let newFile = new File([file], "cv" + id.toString() + ".pdf");
          const newCvs = props.cvs.filter((cv) => cv.name !== newFile.name);
          console.log(newCvs)
          newCvs.push(newFile);
          props.setCVs(newCvs);
        }
        return {
          ...employee,
          Employee: {
            ...employee.Employee,
            cv: {
              ...employee.Employee.cv,
              message: cvMessage,
            },
          },
        };
      }
      return employee;
    });
    props.setEmployeeInformation(employeeInformation);
  };

  const checkEmployeeName = (input, id) => {
    const employeeInformation = props.employeeInformation.map((employee) => {
      if (employee.Employee.employeeID === id && input.trim() === "") {
        return {
          ...employee,
          Employee: {
            ...employee.Employee,
            name: {
              ...employee.Employee.name,
              message: "Field cannot be empty",
              sign: "ERROR",
            },
          },
        };
      } else if (employee.Employee.employeeID === id) {
        return {
          ...employee,
          Employee: {
            ...employee.Employee,
            name: {
              ...employee.Employee.name,
              message: "OK",
              inputValue: input,
            },
          },
        };
      }
      return employee;
    });
    props.setEmployeeInformation(employeeInformation);
  };

  const checkEmployeeEmail = (input, id) => {
    let emailMessage = "";
    input
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? (emailMessage = "OK")
      : (emailMessage = "Must be valid e-mail address");
    const employeeInformation = props.employeeInformation.map((employee) => {
      if (employee.Employee.employeeID === id) {
        return {
          ...employee,
          Employee: {
            ...employee.Employee,
            email: {
              ...employee.Employee.email,
              message: emailMessage,
              inputValue: input,
            },
          },
        };
      }
      return employee;
    });
    props.setEmployeeInformation(employeeInformation);
  };

  const checkEmployeeAge = (input, id) => {
    let ageMessage = 0;
    isNaN(input)
      ? (ageMessage = "Must be a number")
      : input >= 18
      ? (ageMessage = "OK")
      : (ageMessage = "Must be over 18 years old");
    const employeeInformation = props.employeeInformation.map((employee) => {
      if (employee.Employee.employeeID === id) {
        return {
          ...employee,
          Employee: {
            ...employee.Employee,
            age: {
              ...employee.Employee.age,
              message: ageMessage,
              inputValue: input,
            },
          },
        };
      }
      return employee;
    });
    props.setEmployeeInformation(employeeInformation);
  };

  return (
    <div className="data-section">
      <div className="data-section-title">Employee data:</div>
      {props.employeeInformation.map((employee) => (
        <div className="employee-container">
          <div className="employee-data">
            <TextForm
              sign={employee.Employee.name.sign}
              message={employee.Employee.name.message}
              data={employee.Employee.employeeID}
              formValidationFunction={checkEmployeeName}
              label={"name*"}
              name={"name"}
            ></TextForm>
            <TextForm
              sign={employee.Employee.email.sign}
              data={employee.Employee.employeeID}
              message={employee.Employee.email.message}
              formValidationFunction={checkEmployeeEmail}
              label={"e-mail*"}
              name={"e-mail"}
            ></TextForm>
            <TextForm
              sign={employee.Employee.age.sign}
              data={employee.Employee.employeeID}
              message={employee.Employee.age.message}
              formValidationFunction={checkEmployeeAge}
              label={"age*"}
              name={"age"}
            ></TextForm>
            <JobTitleForm
              sign={employee.Employee.jobTitle.sign}
              data={employee.Employee.employeeID}
              label={"job-title*"}
              message={employee.Employee.jobTitle.message}
              formValidationFunction={checkJobTitle}
            ></JobTitleForm>
          </div>
          <div className="employee-cv">
            <CVUpload
              data={employee.Employee.employeeID}
              message={employee.Employee.cv.message}
              checkCV={checkCV}
            ></CVUpload>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeData;
