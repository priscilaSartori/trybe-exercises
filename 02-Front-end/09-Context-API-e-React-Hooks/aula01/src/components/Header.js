import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

function Header({ setIsDarkTheme, isDarkTheme }) {
  return (
    <header>
      <div
        className="theme"
        role="presentation"
        onClick={() => setIsDarkTheme((prevState) => !prevState)}
      >
        {isDarkTheme && <BsSunFill style={{ color: 'yellow' }} />}
        {!isDarkTheme && <BsMoonFill />}
      </div>
    </header>
  );
}

export default Header;