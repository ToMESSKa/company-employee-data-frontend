import ValidationMessage from "./ValidationMessage";
import "../App.css";

function ResultTable(props) {
  return (
    <div>
      <div className="result-title">
        Submitted company and employee information:
      </div>
      <section>
        <div className="col">
          <div className="row">company name</div>
          <div className="row">company e-mail</div>
          <div className="row">number of employees</div>
          <div className="row">company description</div>
        </div>
        <div className="col">
          <div className="row">{props.companyInformation.name}</div>
          <div className="row">{props.companyInformation.email}</div>
          <div className="row">
            {props.companyInformation.numberOfEmployees}
          </div>
          <div className="row">{props.companyInformation.description}</div>
        </div>
      </section>
      <section>
        <header>
          <div className="col">employee name</div>
          <div className="col">e-mail</div>
          <div className="col">age</div>
          <div className="col">job title</div>
          <div className="col">CV</div>
        </header>
        {props.employeeInformation.map((employee) => (
          <div className="row">
            <div className="col">{employee.Employee.name.inputValue}</div>
            <div className="col">{employee.Employee.email.inputValue}</div>
            <div className="col">{employee.Employee.age.inputValue}</div>
            <div className="col">{employee.Employee.jobTitle.inputValue}</div>
            <div className="col">CV</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ResultTable;