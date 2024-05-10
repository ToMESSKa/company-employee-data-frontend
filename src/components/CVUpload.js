import ValidationMessage from "./ValidationMessage";

function CVUpload(props) {
  return (
    <div className="data-container">
      <div>
        {/* <input
            data={props.ei}
            onChange={
              (e) => console.log(e.target.getAttribute("name"))
              // props.checkCV(
              //   e.target.files[0],
              //   parseInt(e.target.getAttribute("id"))
              // )
            }
            id="file"
            type="file"
            name="file"
            class="inputfile"
          /> */}
        <label for={props.ei} class="custom-file-upload">
          Custom Upload
        </label>
        <input
          id={props.ei}
          type="file"
          data={props.ei}
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
