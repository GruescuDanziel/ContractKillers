import React from "react";

class PageClass extends React.Component {

    constructor(){
        super();
        this.menuState = false;
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.menuState = !this.menuState;
        this.forceUpdate();
    }

    render(){
        return ( <h1> This is a page </h1> )
    }
}

export default PageClass
