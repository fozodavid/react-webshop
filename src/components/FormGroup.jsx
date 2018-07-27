import React from "react";

function FormGroup(props) {
  if (props.options) {
    return (
      <div className="form-group">
        <h2>{props.name}</h2>
        {Object.values(props.options).map(option => (
          <div key={option}>
            <input onChange={props.handler} name={props.name} type="checkbox" id={option} />

            <label htmlFor={option} className="form-label">
              {option}
            </label>
          </div>
        ))}
      </div>
    );
  }
  return (
    <p>Price</p>
  )
}

export default FormGroup;
