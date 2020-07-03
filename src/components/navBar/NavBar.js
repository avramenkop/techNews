import React from "react";
import {Link, NavLink} from "react-router-dom";

import './NavBar.css'


export default () => {
  return(
    <nav className='navbar'>
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <Link to='/' className='navbar-logo__link'><img className='navbar-logo__img' src='../img/logo.png' alt=""/></Link>
          </div>
          <div className="navbar-menu">
            <ul className='navbar-menu__list'>
              <li className='navbar-menu__item'>
                <NavLink exact to='/' className='navbar-menu__link'>Home</NavLink>
              </li>
              <li className='navbar-menu__item'>
                <NavLink to='/login' className='navbar-menu__link'>Sign in</NavLink>
              </li>
              <li className='navbar-menu__item'>
                <NavLink to='/register' className='navbar-menu__link'>Sign up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
