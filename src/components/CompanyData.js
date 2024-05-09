import TextForm from "./TextForm";
import "../App.css";
import NumberOfEmployeesForm from "./NumberOfEmployeesForm";

function CompanyData(props) {
  return (
    <div className="data-section">
      <div className="data-section-title">Company data:</div>
      <TextForm label={"name"} name={"name"}></TextForm>
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
