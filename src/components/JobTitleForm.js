import ValidationMessage from "./ValidationMessage";

function JobTitleForm(props) {
  return (
    <div className="data-container">
      <div className="form">
        <div className="label">
          <label className="label">{props.label}</label>
        </div>
        <div className="input">
          <select
            data={props.data}
            onChange={(e) =>
              props.formValidationFunction(
                e.target.value,
                parseInt(e.target.getAttribute("data"))
              )
            }
          >
            <option disabled selected value>
              -- select an option --
            </option>
            <option value="accountant">accountant</option>
            <option value="software-developer">software developer</option>
            <option value="software-tester">software tester</option>
            <option value="manager">manager</option>
          </select>
        </div>
      </div>
      <ValidationMessage message={props.message}></ValidationMessage>
    </div>
  );
}

export default JobTitleForm;
