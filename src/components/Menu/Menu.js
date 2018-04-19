import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {

  render() {

    return (
      <div>
        <header>
          <h1>Menu View</h1>
        </header>
        <br/>
        <p>THIS IS THE MENU VIEW</p>
        <p>Below is the order items</p>
        <div className="menuItem">
            <p>PIZZA 1</p>
        </div>
        <div className="menuItem">
            <p>PIZZA 1</p>
        </div>
      </div>
    );
  }
}

export default Menu;
