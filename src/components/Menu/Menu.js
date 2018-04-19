import React, { Component } from 'react';
import './Menu.css'
import MenuList from './MenuList/MenuList.js'

class Menu extends Component {

  render() {

    return (
        //THIS DIV HOLDS THE ENTIRE MENU VIEW
      <div>
        <header>
          <h1>Menu View</h1>
        </header>
        <hr/>
        <h2>THIS IS THE MENU VIEW, Pizzas available for order are below</h2>
        <MenuList/>
      </div>
    );
  }
}

export default Menu;
