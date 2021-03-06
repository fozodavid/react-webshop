import React from 'react';

// TODO: extract Object values to outside of the component

function CategoryFilter(props) {
  if (props.options) {
    return (
      <div className="form-group">
        <select className="form-control" name="categories" onChange={props.handler}>
          {Object.values(props.options).map(item =>
            <option key={item} value={item}>{item}</option>
          )}
        </select>
      </div>
    )
  }
  return (
    <p>Loading</p>
  );
}

export default CategoryFilter;
