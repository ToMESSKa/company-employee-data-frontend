import ValidationMessage from "./ValidationMessage";

function CVUpload(props) {
  return (
    <form>
        <input onChange={props.handleFileUpload}type="file" name="file" id="file" class="inputfile" />
        <label for="file">Click to upload CV</label>
      </form>
  );
}

export default CVUpload;
