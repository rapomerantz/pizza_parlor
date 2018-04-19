import React, { Component } from 'react';
import '../Menu.css'
import MenuListItem from './MenuListItem.js'

class MenuList extends Component {

  render() {

    return (
      <div>
        <ul>
            <MenuListItem/>
        </ul>
      </div>
    );
  }
}

export default MenuList;
