
import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../const';


function UserNavigationGuest() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={Routes.LOGIN}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNavigationGuest;
