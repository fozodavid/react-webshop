import React from 'react';
import FormGroup from './FormGroup';
import { categories, colors, brands } from '../constants';

function Filters(props) {
  return (
    <div className='col col-md-3'>
      <form>
        <FormGroup name='Category' options={categories} />
        <FormGroup name='Brands' options={brands} />
        <FormGroup name='Colors' options={colors} />
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
