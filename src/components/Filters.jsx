import React from 'react';
import FormGroup from './FormGroup';
import { categories, colors, brands } from '../constants';

function Filters(props) {

  return (
    <div className='col col-md-3'>
      <form>
        <FormGroup name='category' options={categories} handler={props.handler} />
        <FormGroup name='brands' options={brands} handler={props.handler} />
        <FormGroup name='colors' options={colors} handler={props.handler} />
        <FormGroup name='price' />
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
