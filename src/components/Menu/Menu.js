import React, { Component } from 'react';
import './Menu.css'
import MenuList from './MenuList/MenuList.js';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      total: '',
    }
  }

  handleClick =() => {
    this.updateTotal(); 

  }

  updateTotal = () => {
    let result = 0;
    for (let i = 0; i < this.props.reduxState.shoppingCart.length; i++) {
      result += this.props.reduxState.shoppingCart[i].cost
    }
    console.log(result);
    this.setState({
      total: result.toFixed(2)
    }) 

    }
  
  
  componentDidMount() {
    this.updateTotal(); 
  }

  render() {

    return (
        //THIS DIV HOLDS THE ENTIRE MENU VIEW
      <div>
        <header>
          <h1>Menu View</h1>
          <h3> Total: ${this.state.total}</h3>
        </header>
        <hr/>
        <h2>THIS IS THE MENU VIEW, Pizzas available for order are below</h2>
        <MenuList handleClick = {this.handleClick}/>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Menu);
