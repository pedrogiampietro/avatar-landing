import React from 'react';

import './header.scss';

import { logo } from '../../assets/images';

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__nav">
          <li>
            <a href="#">Criar Conta</a>
          </li>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Suporte</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
