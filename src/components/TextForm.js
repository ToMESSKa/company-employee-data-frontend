function TextForm(props) {
  return (
    <div className="form">
      <div className="label">
        <label>{props.label}: </label>
      </div>
      <div className="input">
        <input type="text" name={props.name} />
      </div>
    </div>
  );
}

export default TextForm;
