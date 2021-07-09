import React from 'react';
import {connect} from 'react-redux';
import { LogoSettings } from '../../const';
import Logo from '../logo/logo';
import {AuthorizationStatus} from '../../const';
import UserNavigationGuest from '../user-navigation-guest/user-navigation-guest';
import UserNavigationAuthorized from '../user-navigation-authorised/user-navigation-authorized';
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions';

function Header({username, authorizationStatus, avatarUrl}) {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoSettings={LogoSettings.HEADER} />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                (authorizationStatus === AuthorizationStatus.AUTH
                && <UserNavigationAuthorized username={username} avatarUrl={avatarUrl}/>)
                || <UserNavigationGuest />
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  signoutApp() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
