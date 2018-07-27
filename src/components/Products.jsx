import React from 'react';
import './Products.css';

function Products(props) {
  const { filters } = props;
  return (
    <div className='col col-md-9 products'>
      <h2>Products</h2>
      {props.data
        .filter(item => {
          return (
            filters.category.includes(item.category)
          );
        })
        .filter(item => {
          return (
            filters.brands.includes(item.brand)
          );
        })
        .filter(item => {
          return (
            filters.colors.includes(item.color)
          );
        })
        .map(item => {
          return (
            <div key={item.guid} className='product'>
              <p>{item.category}</p>
              <p>{item.brand}</p>
              <p>{item.name}</p>
              <p>{item.color}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Products;
