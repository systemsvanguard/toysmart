import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Toys from "./Toys";
import Gifts from "./Gifts";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
	  <HashRouter>
		<div>
		  <h1>ToySmart Toys Mart</h1>
		  <ul className="header">
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/toys">Toys</NavLink></li>
			<li><NavLink to="/gifts">Gifts</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
		  </ul>
		  <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
			<Route path="/toys" component={Toys}/>
			<Route path="/gifts" component={Gifts}/>
            <Route path="/contact" component={Contact}/>			 
		  </div>
		</div>
	  </HashRouter>
    );
  }
}
 
export default Main;