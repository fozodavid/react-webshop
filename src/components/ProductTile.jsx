import React from "react";
import "./ProductTile.css";

function ProductTile(props) {
  return (
    <article className="product col col-md-3">
      <img src={props.picture} alt="product" />
      <p>
        {props.name}
        <span style={{ color: props.color }}>⏺</span>
      </p>
      <p className="price">{props.price}</p>
    </article>
  );
}

export default ProductTile;
