import React, { Component } from 'react';
import OrderTable from './OrderTable.js';
import { connect } from 'react-redux';
import moment from 'moment';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

class OrderTableRow extends Component {


  render() {

    return (
        // Each row is a component, brings in data from OrderTable.js
                <tr>
                <td>{this.props.order.customer_name}</td>
                <td>{moment().format('MMMM Do YYYY, h:mm:ss a')}</td>
                <td>{this.props.order.order_total}</td>
                </tr>
    );
  }
}

export default OrderTableRow;