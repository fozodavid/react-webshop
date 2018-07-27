import React, { Component } from 'react';
import data from './data/products.json';
import WebShop from './components/WebShop';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Webshop Engine</h1>
        <WebShop data={data} />
      </div>
    );
  }
}

export default App;
