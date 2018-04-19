import React, { Component } from 'react';
import '../Menu.css'
import MenuListItem from './MenuListItem.js'

class MenuList extends Component {
  constructor(props){
    super(props)

    this.state = ({
      pizzaList: [{id: 1 ,name: 'Splat of Marinara', description: 'Cheeseless pizza with marinara, garlic and red peppers.', cost: 12.99},
                  {id: 2, name: 'Onamonapizza', description: 'Cheese, BBQ sauce and artichokes.', cost: 14.99},
                  {id: 3, name: 'Chinese Firedragon', description: 'Pepperoni, pineapple and banana peppers.', cost: 15.99}
                  ]
    })
  }

  render() {

    let menuListItems = this.state.pizzaList.map((pizza) => {
      return (<MenuListItem key={pizza.id} pizza={pizza}/>)
    })

    return (
      <div>
        <ul>
            {menuListItems}
        </ul>
      </div>
    );
  }
}

export default MenuList;
