import "../App.css";
import React, { useState, useEffect } from "react";

function ValidationMessage(props) {
  const [sign, setSign] = useState();

  useEffect(() => {
    if (props.message === "OK") {
      setSign(<span>&#9989;</span>);
    }else{
      setSign("")
    }
  });

  function cellColor(status) {
    if (status !== "OK") {
      return "red";
    }
  }

  return (
    <div
      style={{ color: cellColor(props.message) }}
      className="validation-message"
    >
      {sign} {props.message}
    </div>
  );
}

export default ValidationMessage;
