import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import cls from "./header.css"
const Header = () => {
  return (
    <div className = {cls.header}>
        <div className = {cls.background}>


        </div>
      <nav className={cls.nav}>
        <IndexLink to="/" >Strona główna</IndexLink>
        <IndexLink to="/">Oferty</IndexLink>
        <IndexLink to="/">Kontakt</IndexLink>
        <IndexLink to="/">Logowanie</IndexLink>
      </nav>
    </div>
  );
};

export default Header;
