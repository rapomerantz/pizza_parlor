import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import axios from 'axios'; 
import logger from 'redux-logger' 


//OG THURSDAY METHOD

// const pizzaReducer = (state = {splat: 0, Onamonapizza: 0, Pepperoni: 0, Rainbow: 0, Firedragon: 0, Date: 0}, action) => {
//     console.log('in pizzaReducer, state:', state, 'action:', action);
//     switch(action.type) { 
//         default:
//             console.log('SPLAT + 1');
//             state.splat +1;
//             console.log(state);
//             return state; 
//     }
// }


const shoppingCart = (state = [
                        {name: 'splat', quantity: 0, cost: 0}, {name: 'onamona', quantity: 0, cost: 0}, 
                        {name: 'pepperoni', quantity: 0, cost: 0}, {name: 'over', quantity: 0, cost: 0},
                        {name: 'chinese', quantity: 0, cost: 0}, {name: 'bad', quantity: 0, cost: 0},],
                      action) => {
        console.log('in shoppingCart, state: ', state, 'action', action);
        const newState = [... state]; //duplicating current state into a new var to be edited
        // let costVar = Number(action.payload.cost);
        switch (action.type) {
            case ('ADD_PIZZA'):
                newState[action.payload.id - 1].quantity = newState[action.payload.id - 1].quantity + 1
                newState[action.payload.id - 1].cost = newState[action.payload.id - 1].cost + action.payload.cost
                return newState //which now is updated state

            case ('REMOVE_PIZZA'): 
                if (newState[action.payload.id - 1].quantity > 0) {
                    newState[action.payload.id - 1].quantity = newState[action.payload.id - 1].quantity - 1
                    newState[action.payload.id - 1].cost = newState[action.payload.id - 1].cost - action.payload.cost
                    return newState //which now is updated state 
                } else {
                    return newState //which now is updated state 
                }
            default: 
                return state;
        }
}









const storeInstance = createStore(
    combineReducers({
        //reducers go here
        shoppingCart
    }),
    //middleware goes here
        applyMiddleware(logger),


)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
