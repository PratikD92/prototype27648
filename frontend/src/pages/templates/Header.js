import React from 'react';
import './templates_style.css';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="header">
      <div className="brand">
        <Link to="/">Tiffinic</Link>
      </div>

      <div className="menu-links">
        {/* <a href="./login.html">Login</a> */}
        <Link to="/allvendors" className="footer-links">
          View Vendors
        </Link>
        <Link to="/allcustomers">View All</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );

};

export default Header;