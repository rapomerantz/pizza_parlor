import React, { Component } from 'react';
import '../Menu.css'

class MenuListItem extends Component {

  render() {

    return (
        <li>
            <div className="menuContainer">
                <div className="menuItem">
                    <h4>{this.props.pizza.name}</h4>
                    <p>{this.props.pizza.description}</p>
                    <h6>{this.props.pizza.cost}</h6>
                    <button>[+]</button>
                    <button>[-]</button>
                </div>
            </div>
        </li>
    );
  }
}

export default MenuListItem;
