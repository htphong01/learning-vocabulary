import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      <div className="menu-circle"></div>
      <div className="header-menu">
        <Link className="menu-link is-active" href="#">
          Vocabulary
        </Link>
        <Link className="menu-link" href="#">
          Sentences
        </Link>
      </div>
    </div>
  );
}

export default Header;
