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
        price: {
          from: 0,
          to: 1500
        },
      }
    };
    this.setFilters = this.setFilters.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
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
          handler={this.setFilters} 
          categoryHandler={this.categoryHandler}
        />
        <Products data={this.props.data} filters={this.state.filters} />
      </div>
    );
  }
}

export default WebShop;
