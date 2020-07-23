import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {

  render() {
    return(
        <header>
		<div id="logo"><img src="./logo.png" alt="Logo Urban Gourmet" width="150"/>Urban Gourmet</div>
		<nav>  
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/admin">Admin</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
			</ul>
		</nav>
	    </header>
    )
  }
}