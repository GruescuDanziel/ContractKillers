import React from 'react';
import menuView from '../views/MenuView.jsx'

class Menu extends React.Component{
    constructor(){
        super();
        this.menuState = false;
    }


    render(){
        return (
            menuView()
        )
    }
}

export default Menu
