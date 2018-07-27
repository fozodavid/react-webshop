import React, { Component } from "react";
import Products from "./Products";
import Filters from "./Filters";

class WebShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        category: "laptop",
        brand: "Lenovo",
        color: "black",
        price: {
          from: 0,
          to: 1500
        },
      }
    };
  }

  render() {
    return (
      <div class='row'>
        <Filters filterSettings={this.state.filters} />
        <Products />
      </div>
    );
  }
}

export default WebShop;
