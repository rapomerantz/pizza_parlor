import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import axios from 'axios'; 
import logger from 'redux-logger' 

const pizzaReducer = (state = {splat: 0, Onamonapizza: 0, Pepperoni: 0, Rainbow: 0, Firedragon: 0, Date: 0}, action) => {
    console.log('in pizzaReducer, state:', state, 'action:', action);
    switch(action.type) { 
        default:
            console.log('SPLAT + 1');
            state.splat +1;
            console.log(state);
            return state; 
    }
}








const storeInstance = createStore(
    combineReducers({
        //reducers go here
        pizzaReducer
    }),
    //middleware goes here
        applyMiddleware(logger),


)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
