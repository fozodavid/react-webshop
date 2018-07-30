import React from "react";
import './CheckBox.css';

function CheckBox(props) {
  if (props.options) {
    return (
      <div className="form-group">
        <h2>{props.name}</h2>
        {Object.values(props.options).map(option => {
        return (
          <div key={option} className="checkbox">
            <input onChange={props.handler} name={props.name} type="checkbox" id={option} />
            <label htmlFor={option} className="form-label">
              {option}
            </label>
          </div>
        )})}
      </div>
    );
  }
  return (
    <p>Price</p>
  )
}

export default CheckBox;
