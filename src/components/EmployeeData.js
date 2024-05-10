import TextForm from "./TextForm";
import "../App.css";
import JobTitleForm from "./JobTitleForm";
import React, { useState } from "react";
import CVUpload from "./CVUpload";

function EmployeeData(props) {
  const [file, setFile] = useState();

  const checkCV = (file, id) => {
    let fileformat = file["name"].split(".").pop();
    let cvMessage = "";
    fileformat === "pdf" ? (cvMessage = "OK") : (cvMessage = "Must be a pdf!");
    const employeeValidationMessages = props.employeeValidationMessages.map(
      (employee) => {
        if (employee.Employee.employeeID === id) {
          setFile(file);
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
      }
    );
    props.setEmployeeValidationMessages(employeeValidationMessages);
  };

  const checkEmployeeName = (input, id) => {
    const employeeValidationMessages = props.employeeValidationMessages.map(
      (employee) => {
        console.log(employee.Employee.employeeID);
        console.log(id);
        if (employee.Employee.employeeID === id && input === "") {
          return {
            ...employee,
            Employee: {
              ...employee.Employee,
              name: {
                ...employee.Employee.name,
                message: "Field cannot be empty",
              },
            },
          };
        } else if (employee.Employee.employeeID === id) {
          return {
            ...employee,
            Employee: {
              ...employee.Employee,
              name: { ...employee.Employee.name, message: "OK" },
            },
          };
        }
        return employee;
      }
    );
    props.setEmployeeValidationMessages(employeeValidationMessages);
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
    const employeeValidationMessages = props.employeeValidationMessages.map(
      (employee) => {
        if (employee.Employee.employeeID === id) {
          return {
            ...employee,
            Employee: {
              ...employee.Employee,
              email: {
                ...employee.Employee.email,
                message: emailMessage,
              },
            },
          };
        }
        return employee;
      }
    );
    props.setEmployeeValidationMessages(employeeValidationMessages);
  };

  const checkEmployeeAge = (input, id) => {
    let ageMessage = 0;
    input >= 18
      ? (ageMessage = "OK")
      : (ageMessage = "Must be over 18 years old");
    const employeeValidationMessages = props.employeeValidationMessages.map(
      (employee) => {
        if (employee.Employee.employeeID === id) {
          return {
            ...employee,
            Employee: {
              ...employee.Employee,
              age: {
                ...employee.Employee.age,
                message: ageMessage,
              },
            },
          };
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
        <div className="employee-container">
          <div className="employee-data">
            <TextForm
              message={employee.Employee.name.message}
              data={employee.Employee.employeeID}
              formValidationFunction={checkEmployeeName}
              label={"name"}
              name={"name"}
            ></TextForm>
            <TextForm
              data={employee.Employee.employeeID}
              message={employee.Employee.email.message}
              formValidationFunction={checkEmployeeEmail}
              label={"e-mail"}
              name={"e-mail"}
            ></TextForm>
            <TextForm
              data={employee.Employee.employeeID}
              message={employee.Employee.age.message}
              formValidationFunction={checkEmployeeAge}
              label={"age"}
              name={"age"}
            ></TextForm>
            <JobTitleForm label={"job-title"}> </JobTitleForm>
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
