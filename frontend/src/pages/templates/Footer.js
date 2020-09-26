import React from 'react';
import './templates_style.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div>
      <div className="bigfooter">

        <div className="one">
          ABOUT | PRIVACY TnC | CONTACT
        </div>

        {/* MIDDLE COLUMN */}
        <div className="two">
          <ul className="footer-list">
            <li>
              BUSINESS
            </li>
            <li>
              <Link to="/business-login" className="footer-links">
                Login
              </Link>
            </li>
            <li>
              Business App Link
            </li>
            <li>
              <Link to="/business-registration" className="footer-links">
                JOIN US
              </Link>
            </li>
          </ul>
        </div>

        <div className="three">
          SOCIAL MEDIA & APP Link
        </div>
      </div>

      <div className="footer">
        All Rights Reserved.
      </div>
    </div>
  );

};

export default Footer;