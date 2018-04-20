import React, { Component } from 'react';
import '../Menu.css'
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

class MenuListItem extends Component {

    addPizza = () => {
        this.props.pizza.cost = Number(this.props.pizza.cost)
        console.log('pizza to add', this.props.pizza.cost);
        this.props.dispatch(
            {
              type: 'ADD_PIZZA',
              payload: this.props.pizza
            }
          )
    }

    removePizza = () => {
        this.props.pizza.cost = Number(this.props.pizza.cost)
        console.log('pizza to remove', this.props.pizza.cost);
        this.props.dispatch(
            {
              type: 'REMOVE_PIZZA',
              payload: this.props.pizza
            }
          )
    }

    render() {

    return (
        <li>
            <div className="menuContainer">
                <div className="menuItem">
                    <h4>{this.props.pizza.name}</h4>
                    <p>{this.props.pizza.description}</p>
                    <h6>{this.props.pizza.cost}</h6>
                    <button onClick={this.addPizza}>[+]</button>
                    <button onClick={this.removePizza}>[-]</button>
                </div>
            </div>
        </li>
    );
  }
}

export default connect(mapReduxStateToProps)(MenuListItem);
