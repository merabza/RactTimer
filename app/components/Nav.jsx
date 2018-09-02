import React from "react";
import {NavLink} from "react-router-dom";

class Nav extends React.Component {

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <NavLink to="/Timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</NavLink>
            </li>
            <li>
              <NavLink to="/Countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by Merab Zakalashvili</li>
          </ul>
        </div>
      </div>
      );
    }
};

module.exports = Nav;