import React, { Component } from 'react';

class OrderTableRow extends Component {

  render() {

    return (
        // Each row is a component, brings in data from OrderTable.js
                <tr>
                <td>customer_name</td>
                <td>4/5/2018 at 4:45 p.m.</td>
                <td>order_total</td>
                </tr>
    );
  }
}

export default OrderTableRow;