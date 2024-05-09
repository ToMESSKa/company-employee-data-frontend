import TextForm from "./TextForm";
import "../App.css";
import JobTitleForm from "./JobTitleForm";

function EmployeeData(props) {
  return (
    <div className="data-section">
      <div className="data-section-title">Employee data:</div>
      {Array(props.numberOfEmployees).fill(
        <div className="employee-data">
          <TextForm label={"name"} name={"name"}></TextForm>
          <TextForm label={"e-mail"} name={"e-mail"}></TextForm>
          <TextForm label={"age"} name={"age"}></TextForm>
          <JobTitleForm label={"job-title"}></JobTitleForm>{" "}
        </div>
      )}
    </div>
  );
}

export default EmployeeData;
