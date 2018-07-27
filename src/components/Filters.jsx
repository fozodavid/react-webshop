import React from 'react';
import FormGroup from './FormGroup';

function Filters(props) {
  return (
    <div className='col col-md-2'>
      <form>
        <FormGroup name='Category' />
        <FormGroup name='Brand' />
        <FormGroup name='Color' />
        <FormGroup name='Price' />
        <button 
          type='button'
          className='btn btn-primary'
          onClick={props.display}
        >
          Filter
        </button>
      </form>
    </div>
  )
}

export default Filters;
