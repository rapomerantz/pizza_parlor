import React, { Component } from 'react';
import CheckoutTable from './CheckoutTable/CheckoutTable'

class Checkout extends Component {

  render() {

    return (
        //THIS DIV HOLDS THE ENTIRE CHECKOUT VIEW
      <div>
        <header>
          <h1>Checkout</h1>
        </header>
        <hr/>
        {/* THIS FORM WILL HANDLE THE NAME INPUT TO BE SENT AS PART OF THE ORDER */}
        <form>
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
            <h3>Total: ___________ </h3>
        </div>
      </div>
    );
  }
}

export default Checkout;
