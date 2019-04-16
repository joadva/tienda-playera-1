import React, { Component } from 'react';
import Products from "./components/Products";
import './App.css';
import Navbar from "./components/NavBar";
import Footer from "./components/footer";

class App extends Component {
  constructor() {
    super();
    this.state = { products: [], filteredProducts: [] };
  }
 componentWillMount() {
    fetch('http://localhost:8000/products').then(res => res.json())
      .then(data => {
        this.setState({ products: data, filteredProducts: data });
        
      }
      );
  }
  render() {
    return (
      <div className="container">
      <Navbar/>
      <Footer/>
      <br/>
      <div className="row">
      <div className="col-md-8">
      <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />

      <div className="col-md-4"> </div>
      <div className="col-md-8"> </div>

      </div>
      </div>
    
</div>


    );
  }
}

export default App;
