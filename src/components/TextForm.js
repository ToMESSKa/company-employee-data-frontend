import ValidationMessage from "./ValidationMessage";

function TextForm(props) {
  return (
    <div className="data-container">
      <div className="form">
        <div className="label">
          <label>{props.label}: </label>
        </div>
        <div
          onChange={(e) =>
            props.formValidationFunction &&
            props.formValidationFunction(
              e.target.value,
              parseInt(e.target.getAttribute("data"))
            )
          }
          className="input"
        >
          <input data={props.data} type="text" name={props.name} />
        </div>
      </div>
      <ValidationMessage sign={props.sign} message={props.message}></ValidationMessage>
    </div>
  );
}

export default TextForm;
