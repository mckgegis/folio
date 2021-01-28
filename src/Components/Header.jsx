import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header-container">
        <Link to="/" className="header-home-name-container">
          <div className="header-home-name">Ryan Leung</div>
        </Link>
        <div className="header-links-container">
          <Link className="header-link">Projects</Link>
          <Link className="header-link">Resume</Link>
          <Link className="header-link">About Me</Link>
        </div>
      </div>
    );
}

export default Header;