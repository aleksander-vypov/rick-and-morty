import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.scss';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" aria-current="page">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
