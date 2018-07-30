import React from 'react';
import Product from './Product';
import './Products.css';

function Products(props) {
  const { display } = props;
  return (
    <div className='col col-md-9 products'>
      {props.data
        .filter(item => display.category.includes(item.category))
        .filter(item => {
          if(display.brands.length === 0) {
            return true;
          }
          return (
            display.brands.includes(item.brand)
          );
        })
        .filter(item => {
          if(display.colors.length === 0) {
            return true;
          }
          return (
            display.colors.includes(item.color)
          );
        })
        .sort((a,b) => {
          return (
            a.price.substring(1)-b.price.substring(1)
          )
        })
        .map(item => <Product key={item.guid} {...item} />)
      }
    </div>
  );
}

export default Products;
