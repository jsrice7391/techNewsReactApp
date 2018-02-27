import React from "react";
import {Navbar, NavItem} from "react-materialize";
import "./Nav.css"

export const Nav = props => 
<Navbar className="navBar" brand="Wired Web Scraper" right>
    <NavItem href="/articles/saved">Saved</NavItem>
  </Navbar>



