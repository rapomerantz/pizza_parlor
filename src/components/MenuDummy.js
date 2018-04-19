import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class MenuDummy extends Component {
    
    constructor (props){
        super(props)                                                          //3.
      
        this.state= {
          pizzaItem: [],
          
        }
    }
     

    getPizzas() {
        axios.get('/pizza')
        .then((response) => {
            this.setState({                                                 //4.
                pizzaItem: response.data      
                });     
                console.log(this.state.pizzaItem)
        })
        .catch((error) => {
        console.log('Error,in GET', error) 
        })   
    }
    
    componentDidMount() {
        this.getPizzas(); 
    }



    render(){
        return(<h1>MenuDummy</h1>)
    }
}


export default MenuDummy;