import React from 'react';
import {useSelector} from 'react-redux';
import { LogoTypes } from '../../const';
import Logo from '../logo/logo';
import {AuthorizationStatus} from '../../const';
import UserNavigationGuest from '../user-navigation-guest/user-navigation-guest';
import UserNavigationAuthorized from '../user-navigation-authorised/user-navigation-authorized';
//import {signout} from '../../store/api-actions';
import {getAuthorizationStatus, getUserAvatar, getUserEmail} from '../../store/user/selectors';

function Header() {

  const email = useSelector(getUserEmail);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const avatarUrl = useSelector(getUserAvatar);

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType={LogoTypes.HEADER} />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                (authorizationStatus === AuthorizationStatus.AUTH
                && <UserNavigationAuthorized email={email} avatarUrl={avatarUrl} authorizationStatus={authorizationStatus}/>)
                || <UserNavigationGuest />
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
