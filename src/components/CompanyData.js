import TextForm from "./TextForm";
import "../App.css";

function CompanyData() {
  return (
    <div className="data-section">
    <div className="data-section-title">Company data:</div>
      <TextForm label={"name"} name={"name"}></TextForm>
      <TextForm label={"e-mail"} name={"e-mail"}></TextForm>
      <TextForm
        label={"number of employees"}
        name={"number-of-employees"}
      ></TextForm>
      <TextForm label={"description"} name={"description"}></TextForm>
    </div>
  );
}

export default CompanyData;
