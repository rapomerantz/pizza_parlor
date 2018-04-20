import React, { Component } from 'react';
import Orders from '../Orders/Orders.js';

class OrderTable extends Component {

  render() {

    return (
        // Each row is a component, brings in data from Checkout.js probably
      <div>
        <table>
          <theader>
            <tr>
                <th>Name</th>
                <th>Time Order Placed</t>
                <th>Cost</th>
          </theader>
          <tbody>
            <tr>
                <td>customer_name</td>
                <td>4/5/2018 at 4:45 p.m.</td>
                <td>order_total</td>
            </tr>
          </tbody>
        </div>
    );
  }
}

export default OrderTable;