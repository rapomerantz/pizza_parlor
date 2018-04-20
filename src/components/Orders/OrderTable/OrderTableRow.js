import React, { Component } from 'react';
import OrderTable from './OrderTable.js';



class OrderTableRow extends Component {


  render() {

    return (
        // Each row is a component, brings in data from OrderTable.js
                <tr>
                <td></td>
                <td>hardCoded: 4/5/2018 at 4:45 p.m.</td>
                <td></td>
                </tr>
    );
  }
}

export default OrderTableRow;