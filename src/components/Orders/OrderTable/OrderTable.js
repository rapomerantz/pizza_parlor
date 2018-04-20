import React, { Component } from 'react';
import './OrderTable.css'
import axios from 'axios';
import OrderTableRow from './OrderTableRow.js';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

class OrderTable extends Component {
  constructor (props) {
    super(props)

      this.state = ({
        orderList: []
      })
    }

    getOrderItems = () => {
      axios.get('/order').then( (response) => {
        console.log('client getOrderItems', response);
        this.setState({
          orderList: response.data
        })
      }).catch( (error) => {
        console.log('error getting order items', error);
      })
      }
  
    componentDidMount() {
      this.getOrderItems();
    }

  render() {
    let orderListItems = this.state.orderList.map((order) => {
      return (<OrderTableRow key={order.id} order={order}/>)
    })

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

            {orderListItems}

           </tbody>
        </table>

      </div>
    );
  }
}

export default OrderTable;;