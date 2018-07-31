import React from 'react';
import CategoryFilter from './CategoryFilter';
import CheckBox from './CheckBox';
import { categories, colors, brands } from '../constants';

function Filters(props) {

  return (
    <aside className='col col-md-3'>
      <form>
        <CategoryFilter name='category' options={categories} handler={props.categoryHandler} />
        <CheckBox name='brands' options={brands} handler={props.checkboxHandler} />
        <CheckBox name='colors' options={colors} handler={props.checkboxHandler} />
        <button type='button' className='btn' onClick={props.updateDisplay}>
          Filter
        </button>
      </form>
    </aside>
  )
}

export default Filters;
