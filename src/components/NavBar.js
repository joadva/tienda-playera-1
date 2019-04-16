import React, { Component } from 'react';


export default class Navbar extends Component{
    render(){
        return <div>
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">T-ShirtCoin</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul className="nav navbar-nav">
       
        <li><a href="#">  Catalogo</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
        
      </ul>
     
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Iniciar Sesion</a></li>
      </ul>
    </div>
  </div>
</nav>
        </div>

    }
}