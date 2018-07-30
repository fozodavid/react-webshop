import React, { Component } from "react";
import Products from "./Products";
import Filters from "./Filters";


class WebShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        category: 'mobile',
        brands: [],
        colors: [],
      },
      display: {
        category: 'mobile',
        brands: [],
        colors: [],
      }
    };
    this.displayHandler = this.displayHandler.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
  }

  displayHandler() {
    this.setState({
      ...this.state,
      display: {
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

  setFilters(e) {
    if (e.target.checked) {
      return this.setState({
        filters: {
          ...this.state.filters,
          [e.target.name]: [
            ...this.state.filters[e.target.name],
            e.target.id
          ]
        }
      })
    }
    this.setState({
      filters: {
        ...this.state.filters,
        [e.target.name]: [
          ...this.state.filters[e.target.name].filter(item => item !== e.target.id)
        ]
      }
    })
  };

  render() {
    return (
      <div className='row'>
        <Filters 
          filterSettings={this.state.filters} 
          checkboxHandler={this.setFilters} 
          categoryHandler={this.categoryHandler}
          displayHandler={this.displayHandler}
        />
        <Products data={this.props.data} display={this.state.display} />
      </div>
    );
  }
}

export default WebShop;
