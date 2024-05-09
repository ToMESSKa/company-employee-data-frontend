function JobTitleForm(props) {
  return (
    <div className="form">
      <div className="label">
        <label className="label">job title</label>
        </div>
      <div className="input">
        <select>
          <option value="accountant">accountant</option>
          <option value="software-developer">software developer</option>
          <option value="software-tester">software tester</option>
          <option value="manager">manager</option>
        </select>
        </div>
    </div>
  );
}

export default JobTitleForm;
