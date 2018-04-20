import React, { Component } from 'react';
import CheckoutTable from './CheckoutTable/CheckoutTable';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newName: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  } 
  
  handleSubmit = (event) => {
    let newOrder = {customer_name: this.state.newName, order_total: this.state.total}
    event.preventDefault();
    console.log('submit clicked');
    axios.post('/pizza', newOrder).then((response) => {
      this.setState({
        newName: ''
      })
      console.log('success posting order');
    }).catch((error) => {
      console.log('error posting order');
    })
  }

  updateTotal = () => {
    let result = 0;
    for (let i = 0; i < this.props.reduxState.shoppingCart.length; i++) {
      result += this.props.reduxState.shoppingCart[i].cost
    }
    console.log(result);
    this.setState({
      total: result.toFixed(2)
    }) 
  }

  componentDidMount() {
        this.updateTotal(); 
  }
  
  render() {

    return (
        //THIS DIV HOLDS THE ENTIRE CHECKOUT VIEW
      <div>
        <header>
          <h1>Checkout</h1>
        </header>
        <hr/>
        {/* THIS FORM WILL HANDLE THE NAME INPUT TO BE SENT AS PART OF THE ORDER */}
        <form onSubmit={this.handleSubmit} >
            <input type="text" placeholder="Name input" value={this.state.newName} onChange={this.handleNameChange}/>
            <input type="submit"/>
        </form>
        <CheckoutTable/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* THIS TOTAL WILL BE DRAWN FROM THIS.STATE */}
        <div>
            <h3>Total: {this.state.total}</h3>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps) (Checkout);
