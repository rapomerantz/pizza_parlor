import React, { Component } from 'react';

class CheckoutTableRow extends Component {

  render() {

    return (
        // Each row is a component, brings in data from Checkout.js probably
                <tr>
                    <td>Cheese</td>
                    <td>12</td>
                    <td>$5000</td>
                </tr>
    );
  }
}

export default CheckoutTableRow;
