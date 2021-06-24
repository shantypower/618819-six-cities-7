import React from 'react';
import { LogoSettings } from '../../const';
import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';

function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoSettings={LogoSettings.HEADER}/>
          </div>
          <UserNavigation isAuth/>
        </div>
      </div>
    </header>
  );
}

export default Header;
