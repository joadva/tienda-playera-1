import React, { Component } from 'react';


export default class Products extends Component{
    render(){
        const productItem = this.props.products.map(product =>(  
            
        <div className="col-md-4">
            <div className="thumbnail text-center">

            <a href={`#${product.id}`} o onClick={(e) => this.props.handleAddToCard(e, product)}>
            <img src={`/products/${product.sku}_2.jpg`} alt="product.title" />
             <p>
             {product.title}
             </p>
            </a>
            </div>
            <p>
            <b> ${product.price}  </b>
            <button className="btn btn-primary" onClick={(e) => this.props.handleAddToCard(e, product)}>Agregar al carrrito</button>
            </p>
        </div>
            )
            ) 
        return(
            <div className="row">
                {productItem}
            </div>
        )
    }
}



