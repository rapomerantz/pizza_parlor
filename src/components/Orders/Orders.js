import React, { Component } from 'react';
import OrderTable from './OrderTable/OrderTable.js';

class Orders extends Component {

  render() {

    return (
        //THIS DIV HOLDS THE ENTIRE ORDERS VIEW
      <div>
        <header>
          <h1>Orders</h1>
        </header>
        <hr/>
        <h2>THIS IS THE ORDERS VIEW</h2>
        <OrderTable/>
      </div>
    );
  }
}

export default Orders;
