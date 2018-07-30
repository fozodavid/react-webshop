import React from "react";
import Product from "./Product";
import filterProducts from "../utils";
import "./Products.css";

function Products(props) {
  const itemsOnDisplay = filterProducts(props.data, props.onDisplay);
  if (itemsOnDisplay.length > 0) {
    return (
      <div className="col col-md-9 products">
        {itemsOnDisplay.map(item => <Product key={item.guid} {...item} />)}
      </div>
    );
  }
  return <p className="error">Sorry, no products matched your selection.</p>;
}

export default Products;
