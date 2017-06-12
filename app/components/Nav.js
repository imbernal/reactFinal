import React from 'react';
import { NavLink } from 'react-router-dom';

function Navegation() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src='http://www.starthubcenters.com/wp-content/uploads/2017/02/starthub_logo_white-1.png' />
      </div>
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/about'>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/contact'>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navegation;
