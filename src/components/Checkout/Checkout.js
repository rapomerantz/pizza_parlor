import React, { Component } from 'react';
import CheckoutTable from './CheckoutTable/CheckoutTable';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      total: '',
    }
  }
  
  handleSubmit = () => {
    console.log('submit clicked');
    
  }

  updateTotal = () => {
    let result = 0;
    for (let i = 0; i < this.props.reduxState.shoppingCart.length; i++) {
      result += this.props.reduxState.shoppingCart[i].cost
    }
    console.log(result);
    this.setState({
      total: result
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
            <input type="text" placeholder="Name input"/>
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
