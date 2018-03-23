import React, { Component } from "react";
import '../App.css';

class MenuIcon extends Component {
  render() {
    return (
      <div className="hamburger" onMouseDown={this.props.handleMouseDown}>


  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 123.5">
    <g id="hamburger">
      <path d="M8.3 14.2h127.3v19.7H8.3z"/>
      <path d="M8.3 51.9h127.3v19.7H8.3z"/>
      <path d="M8.3 89.6h127.3v19.7H8.3z"/>
    </g>
  </svg>
      </div>
    );
  }

}



export default MenuIcon;
