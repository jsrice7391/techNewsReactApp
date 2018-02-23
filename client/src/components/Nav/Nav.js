import React from "react";
import {Navbar, NavItem} from "react-materialize";
import "../../utils/main.css"

export const Nav = props => 
<Navbar className="navBar" brand="Wired Web Scraper" right>
    <NavItem href="get-started.html">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>



