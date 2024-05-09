import TextForm from "./TextForm";
import "../App.css";
import JobTitleForm from "./JobTitleForm";

function EmployeeData() {
  return (
    <div className="data-section">
    <div className="data-section-title">Employee data:</div>
      <TextForm label={"name"} name={"name"}></TextForm>
      <TextForm label={"e-mail"} name={"e-mail"}></TextForm>
      <TextForm label={"age"} name={"age"}></TextForm>
      <JobTitleForm label={"job-title"}></JobTitleForm>
    </div>
  );
}

export default EmployeeData;
