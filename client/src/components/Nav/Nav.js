import React from "react";
import {Navbar, NavItem} from "react-materialize";

export const Nav = props => 
<Navbar brand="logo" left>
  <div className="container">
    <NavItem href="get-started.html">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
    </div>
  </Navbar>



