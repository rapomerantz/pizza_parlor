import React, { Component } from 'react';
import './OrderTable.css'
import OrderTableRow from './OrderTableRow.js'

class OrderTable extends Component {

  render() {

    return (
        // Each row is a component, brings in data from Orders.js
      <div>
        <table>
          <tbody>
            <tr>
                <td>Name</td>
                <td>Time Order Placed</td>
                <td>Cost</td>
            </tr>
            <OrderTableRow/>
            <OrderTableRow/>
            <OrderTableRow/>
            <OrderTableRow/>
            <OrderTableRow/>

           </tbody>
        </table>

      </div>
    );
  }
}

export default OrderTable;;