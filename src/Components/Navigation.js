import React, { Component } from "react";
import '../App.css';
import Menu from '../Components/Menu';
import MenuIcon from '../Components/MenuIcon';
import CloseIcon from '../Components/CloseIcon';


class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
      toggle: true
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);


  }


  handleMouseDown(e) {
    this.toggleMenu();


    console.log("clicked");
    e.stopPropagation();
  }


  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }


  render (){

const button = this.state.visible ? (
  <CloseIcon handleMouseDown={this.handleMouseDown} />
) : (

  <MenuIcon handleMouseDown={this.handleMouseDown} />
)

    return (

      <div className="container">
      <div className="menuBackground"></div>
      {button}
      <Menu handleMouseDown={this.handleMouseDown}
      menuVisibility={this.state.visible} />
</div>
    );
  }
}

export default MenuContainer;
