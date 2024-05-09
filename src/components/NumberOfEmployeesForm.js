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
          onChange={(e) => props.formValidationFunction(e.target.value)}
          type="text"
          name={props.name}
        />
      </div>
    </div>
    <ValidationMessage message={props.message}></ValidationMessage>
    </div>
  );
}

export default NumberOfEmployeesForm;
