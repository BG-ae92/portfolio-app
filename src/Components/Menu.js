import React, { Component } from 'react';
import '../App.css';


class Menu extends Component {
  render() {
    var visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }

return (
  <div id="fullMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
  <ul className="menuList">
 <li id="menu-about"><a href="#"> About</a></li>
 <li id="menu-work"><a href="#"> Work</a></li>
 <li id="menu-contact"><a href="#"> Contact</a></li>
 <li id="menu-extras"><a href="#"> Extras</a></li>
  </ul>

  </div>
);


  }
}

export default Menu;
