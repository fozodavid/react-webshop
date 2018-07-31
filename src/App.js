import React, { Component } from "react";
import data from "./data/products.json";
import WebShop from "./components/WebShop";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Webshop Engine</h1>
        </header>
        <WebShop data={data} />
      </div>
    );
  }
}

export default App;
