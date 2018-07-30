import React from 'react';
import './Products.css';

function Products(props) {
  const { filters } = props;
  return (
    <div className='col col-md-9 products'>
      <h2>{props.filters.category}</h2>
      {props.data
        .filter(item => {
          return (
            filters.category.includes(item.category)
          );
        })
        .filter(item => {
          if(filters.brands.length === 0) {
            return true;
          }
          return (
            filters.brands.includes(item.brand)
          );
        })
        .filter(item => {
          if(filters.colors.length === 0) {
            return true;
          }
          return (
            filters.colors.includes(item.color)
          );
        })
        .sort((a,b) => {
          return (
            a.price.substring(1)-b.price.substring(1)
          )
        })
        .map(item => {
          return (
            <div key={item.guid} className='product'>
              <p>{item.brand}</p>
              <p>{item.name}</p>
              <p>{item.color}</p>
              <p>{item.price}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Products;
