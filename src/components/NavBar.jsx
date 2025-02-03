/**
 * @copyright 2025 Anthony Lomax
 */

import { Navbar } from "flowbite-react";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function NavBar ({ navOpen }) { 

  const lastActiveLink = useRef();
  const activeBox = useRef();
  
  const navItems = [
    {
      label:'Home',
      link:'#home',
      className:'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Projects',
      link: '#projects',
      className: 'nav-link'
    },
    {
      label: 'Blog',
      link: '#blog',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {
        navItems.map(({label, link, className, ref}, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={null}        
          >
            {label}
        </a>
      ))
      }
      <div
        className="active-box"
        ref={activeBox}
      >

      </div>
    </nav>
  )
}

NavBar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default NavBar;