import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
// import axios from 'axios'; 
import logger from 'redux-logger' 

// will eventually get shoppingCart data from a Saga Axios request
const shoppingCart = (state = [
                        {name: 'Splat of Marinara', quantity: 0, cost: 0}, {name: 'OnomanaPizza', quantity: 0, cost: 0}, 
                        {name: 'Pepperoni', quantity: 0, cost: 0}, {name: 'Over the Rainbow', quantity: 0, cost: 0},
                        {name: 'Chinese Firedragon', quantity: 0, cost: 0}, {name: 'Bad Date', quantity: 0, cost: 0}],
                      action) => {
        console.log('in shoppingCart, state: ', state, 'action', action);
        const newState = [...state]; //duplicating current state into a new var to be edited
        switch (action.type) {
            case ('ADD_PIZZA'):
                const pizzaToAdd = action.payload;
                newState[pizzaToAdd.id - 1].quantity = newState[pizzaToAdd.id - 1].quantity + 1;
                newState[pizzaToAdd.id - 1].cost = newState[pizzaToAdd.id - 1].cost + pizzaToAdd.cost;
                return newState //which now is updated state

            case ('REMOVE_PIZZA'): 
                const pizzaToRemove = action.payload;
                if (newState[pizzaToRemove.id - 1].quantity > 0) {
                    newState[pizzaToRemove.id - 1].quantity = newState[pizzaToRemove.id - 1].quantity - 1;
                    newState[pizzaToRemove.id - 1].cost = newState[pizzaToRemove.id - 1].cost - pizzaToRemove.cost;
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
