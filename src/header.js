import React, { Component } from 'react';
import Logo from './assets/logo.png';


class TopNav extends Component {
  render() {
    return (
      <div className="nav">
        <img src={Logo} width="300" className="thumb"/>
         <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default TopNav;