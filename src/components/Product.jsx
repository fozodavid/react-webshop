import React from 'react';
import './Product.css';

function Product(props) {

  return (
    <article className='product col col-md-3'>
      <img src={props.picture} />
      <p>
        {props.name}
        <span style={{color: props.color}}>⏺</span>
      </p>
      <p className="price">{props.price}</p>
    </article>
  );
}

export default Product;
