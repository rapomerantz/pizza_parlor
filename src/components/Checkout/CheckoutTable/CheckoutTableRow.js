import React, { Component } from 'react';
import '../Checkout.css'

class CheckoutTable extends Component {

  render() {

    return (
        //THIS DIV HOLDS THE ENTIRE CHECKOUT VIEW
      <div>

        <h2>THIS IS THE CHECKOUT VIEW - a table will live here</h2>
        
        <table>
            <tbody>
                <tr>
                    <td>Pizza Name</td>
                    <td>Quantity</td>
                    <td>Cost</td>
                </tr>
                <tr>
                    <td>Cheeze</td>
                    <td>120</td>
                    <td>$50000</td>
                </tr>
                <tr>
                    <td>Pizza Name</td>
                    <td>Quantity</td>
                    <td>Cost</td>
                </tr>

            </tbody>
        </table>

      </div>
    );
  }
}

export default CheckoutTable;
