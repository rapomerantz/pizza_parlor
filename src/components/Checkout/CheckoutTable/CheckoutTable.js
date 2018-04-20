import React, { Component } from 'react';
import '../Checkout.css';
import CheckoutTableRow from './CheckoutTableRow.js';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

class CheckoutTable extends Component {

  render() {
    
    let tableItems = this.props.reduxState.shoppingCart.map((pizza) => {
      return <CheckoutTableRow key={pizza.name} pizza={pizza}/>
    })

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
              {/* This is where the .map goes */}
                {tableItems} 

            </tbody>
        </table>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps) (CheckoutTable);
