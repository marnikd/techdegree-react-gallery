import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to = '/search' style={{background: "black"}}  activeStyle={{background: "red"}}>Search bar</NavLink></li>
                <li><NavLink to ='/rugby'>Rugby</NavLink></li>
                <li><NavLink to ='/amsterdam'>Amsterdam</NavLink></li>
                <li><NavLink to ='/computers'>Computers</NavLink></li>
            </ul>
      </nav>
    );
}

export default Nav;