import React from 'react';
import CategoryFilter from './CategoryFilter';
import FormGroup from './FormGroup';
import { categories, colors, brands } from '../constants';

function Filters(props) {

  return (
    <div className='col col-md-3'>
      <form>
        <CategoryFilter name='category' options={categories} handler={props.categoryHandler} />
        <FormGroup name='brands' options={brands} handler={props.checkboxHandler} />
        <FormGroup name='colors' options={colors} handler={props.checkboxHandler} />
        <button type='button' className='btn' onClick={props.displayHandler}>
          Filter
        </button>
      </form>
    </div>
  )
}

export default Filters;
