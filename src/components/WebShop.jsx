import React, { Component } from "react";
import Products from "./Products";
import Filters from "./Filters";
import { categories } from "../constants";


class WebShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        category: categories.MOBILE,
        brands: [],
        colors: [],
      },
      onDisplay: {
        category: categories.MOBILE,
        brands: [],
        colors: [],
      }
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
    this.addToFilters = this.addToFilters.bind(this);
    this.removeFromFilters = this.removeFromFilters.bind(this);
  }

  updateDisplay() {
    this.setState({
      ...this.state,
      onDisplay: {
        ...this.state.filters
      }
    })
  }

  categoryHandler(e) {
    this.setState({
      filters: {
        ...this.state.filters,
        category: e.target.value
      }
    })
  }

  addToFilters(group, id) {
    this.setState({
      filters: {
        ...this.state.filters,
        [group]: [
          ...this.state.filters[group],
          id
        ]
      }
    })
  }

  removeFromFilters(group, id) {
    this.setState({
      filters: {
        ...this.state.filters,
        [group]: [
          ...this.state.filters[group].filter(item => item !== id)
        ]
      }
    })
  }

  checkboxHandler(e) {
    if (e.target.checked) {
      return this.addToFilters(e.target.name, e.target.id)
    }
    this.removeFromFilters(e.target.name, e.target.id);
  };

  render() {
    return (
      <div className='row'>
        <Filters 
          checkboxHandler={this.checkboxHandler} 
          categoryHandler={this.categoryHandler}
          updateDisplay={this.updateDisplay}
        />
        <Products data={this.props.data} onDisplay={this.state.onDisplay} />
      </div>
    );
  }
}

export default WebShop;
