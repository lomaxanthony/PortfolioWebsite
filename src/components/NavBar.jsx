/**
 * @copyright 2025 Anthony Lomax
 */


import { useRef, useEffect } from "react";
import PropTypes from "prop-types";


function NavBar ({ navOpen }) { 

  const lastActiveLink = useRef();
  const activeBox = useRef();


  // Navbar box highlighting
  const intiActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    intiActiveBox();
    window.addEventListener('resize', intiActiveBox);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', intiActiveBox);
    };
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.currentTarget.classList.add('active');
    lastActiveLink.current = event.currentTarget;

    activeBox.current.style.top = event.currentTarget.offsetTop + 'px';
    activeBox.current.style.left = event.currentTarget.offsetLeft + 'px';
    activeBox.current.style.width = event.currentTarget.offsetWidth + 'px';
    activeBox.current.style.height = event.currentTarget.offsetHeight + 'px';
  }
  
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
          onClick={activeCurrentLink}        
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