
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CheckoutDummy from '../CheckoutDummy'
import MenuDummy from '../MenuDummy.js'
import OrdersDummy from '../OrdersDummy'



class App extends Component {
  render() {
    return (

      <Router>
        <div>
          {/* <MenuDummy />
          <CheckoutDummy /> */}
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
          <Route exact path="/" component={MenuDummy}/>
          <Route path="/checkout" component={CheckoutDummy}/>
          <Route exact path="/orders" component={OrdersDummy}/>
        </div>
      </Router>

    );
  }
}

export default App;


