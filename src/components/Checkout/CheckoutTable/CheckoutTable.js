import React, { Component } from 'react';
import '../Checkout.css'
import CheckoutTableRow from './CheckoutTableRow.js'

class CheckoutTable extends Component {

  render() {

    return (
      <div>

        <h2>THIS IS THE CHECKOUT VIEW - a table will live here</h2>
        
        <table>
            <tbody>
                <tr>
                    <td>Pizza Name</td>
                    <td>Quantity</td>
                    <td>Cost</td>
                </tr>
                <CheckoutTableRow/>
                <CheckoutTableRow/>
                <CheckoutTableRow/>
                <CheckoutTableRow/>
                <CheckoutTableRow/>

            </tbody>
        </table>

      </div>
    );
  }
}

export default CheckoutTable;
