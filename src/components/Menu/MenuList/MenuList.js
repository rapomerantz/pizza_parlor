import React, { Component } from 'react';
import '../Menu.css';
import axios from 'axios';
import MenuListItem from './MenuListItem.js';


class MenuList extends Component {
  constructor(props){
    super(props)

    this.state = ({
      pizzaList: []
    })
  }

  getMenuItems = () => {
    axios.get('/pizza').then((response) => {
      this.setState({
        pizzaList: response.data
      })
    }).catch((error) => {
      console.log('error getting menu', error);
    })
  }

  componentDidMount() {
    this.getMenuItems();
  }
  
  render() {

    let menuListItems = this.state.pizzaList.map((pizza) => {
      return (<MenuListItem key={pizza.id} pizza={pizza} handleClick = {this.props.handleClick}/>)
    })

    return (
      <div>
        <ul>
            {menuListItems}
        </ul>
      </div>
    );
  }
}

export default MenuList;
