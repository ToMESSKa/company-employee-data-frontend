import ValidationMessage from "./ValidationMessage";

function CVUpload(props) {
  return (
    <div className="data-container">
      <div>
        <label for={props.data} class="custom-file-upload">
          Custom Upload
        </label>
        <input
          id={props.data}
          type="file"
          data={props.data}
          onChange={
            (e) => 
            props.checkCV(
              e.target.files[0],
              parseInt(e.target.getAttribute("data"))
            )
          }
        />
      </div>
      <ValidationMessage message={props.message}></ValidationMessage>
    </div>
  );
}

export default CVUpload;
