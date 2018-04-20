
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Checkout from '../Checkout/Checkout.js'
import Menu from '../Menu/Menu'
import Orders from '../Orders/Orders'




class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Menu}/>
          <Route path="/checkout" component={Checkout}/>
          <Route exact path="/orders" component={Orders}/>
        </div>
      </Router>

    );
  }
}

export default App;


