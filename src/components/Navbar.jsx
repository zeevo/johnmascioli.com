import React from 'react';

const Navbar = () => {
  return (
    <nav class="header__nav text-right container">
      <a href="/" class="header__logo"></a>
      <ul>
        <li class="header__item">
          <a href="/" class="header__item__link fade hide-mobile">
            Home
          </a>
          <a href="/about/" class="header__item__link fade hide-mobile">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
