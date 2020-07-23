import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {

  render() {
    return(
      <div>
        <h1>Proyecto simple usuarios y database</h1>
        <img src="./logo.png" alt="Logo Urban Gourmet" width="150"/>
        <ul className ="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurantes">Restaurantes</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          {/* 
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          */ }
        </ul>
	    </div>
    )
  }
}