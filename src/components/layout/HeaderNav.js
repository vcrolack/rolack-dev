import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/nav-logo/logo-lg.svg'

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="logo header" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className={({isActive}) => (isActive ? "activated" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({isActive}) => (isActive ? "activated" : "")}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({isActive}) => (isActive ? "activated" : "")}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => (isActive ? "activated" : "")}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
