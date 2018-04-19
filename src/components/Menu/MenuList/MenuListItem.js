import React, { Component } from 'react';
import '../Menu.css'

class MenuListItem extends Component {

  render() {

    return (
        <li>
            <div className="menuContainer">
                <div className="menuItem">
                    <h4>PIZZA NAME</h4>
                    <p>Pizza ingredients..............</p>
                    <button>[+]</button>
                    <button>[-]</button>
                </div>
            </div>
        </li>
    );
  }
}

export default MenuListItem;
