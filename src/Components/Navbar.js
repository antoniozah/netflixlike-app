import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a href="#" className="navbar__logo">
          MovieApp
        </a>
      </div>

      {/* <form className="navbar__search">
        <input type="text" placeholder="Search..." />
        <input type="submit" value="Go" />
      </form> */}
    </div>
  );
};

export default Navbar;
