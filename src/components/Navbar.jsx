import React from 'react';

const Navbar = () => {
  return (
    <nav className="header__nav text-right container">
      <a href="/" className="header__logo"></a>
      <ul>
        <li className="header__item">
          <a href="/" className="header__item__link fade hide-mobile">
            Home
          </a>
          <a href="/about/" className="header__item__link fade hide-mobile">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
