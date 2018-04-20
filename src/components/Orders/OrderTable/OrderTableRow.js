import React, { Component } from 'react';
import OrderTable from './OrderTable.js';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

class OrderTableRow extends Component {




  render() {

    return (
        // Each row is a component, brings in data from OrderTable.js
                <tr>
                <td>{this.props.order.customer_name}</td>
                <td>hardCoded: 4/5/2018 at 4:45 p.m.</td>
                <td>{this.props.order.order_total}</td>
                </tr>
    );
  }
}

export default OrderTableRow;