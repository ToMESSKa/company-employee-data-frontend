import ValidationMessage from "./ValidationMessage";

function NumberOfEmployeesForm(props) {
  return (


  <div className="data-container">
    <div className="form">
      <div className="label">
        <label>{props.label}: </label>
      </div>
      <div className="input">
        <input
          onChange={(e) =>
            e.target.value !== ""
              ? props.setnumberOfEmployees(parseInt(e.target.value))
              : props.setnumberOfEmployees(0)
          }
          type="text"
          name={props.name}
        />
      </div>
    </div>
    <ValidationMessage></ValidationMessage>
    </div>
  );
}

export default NumberOfEmployeesForm;
