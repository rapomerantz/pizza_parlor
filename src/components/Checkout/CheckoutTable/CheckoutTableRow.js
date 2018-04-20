import React, { Component } from 'react';

class CheckoutTableRow extends Component {

  render() {

    return (
        // Each row is a component, brings in data from Checkout.js probably
                <tr>
                    <td>{this.props.pizza.name}</td>
                    <td>{this.props.pizza.quantity}</td>
                    <td>{this.props.pizza.cost}</td>
                </tr>
    );
  }
}

export default CheckoutTableRow;
