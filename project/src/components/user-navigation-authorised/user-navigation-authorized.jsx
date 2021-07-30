import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Routes} from '../../const';
import {useDispatch} from 'react-redux';
import {signOut} from '../../store/api-actions';
import { useHistory } from 'react-router-dom';

function UserNavigationAuthorized({ email, avatarUrl}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickToFavorites = () => {
    history.push(Routes.FAVORITES);
  };
  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" onClick={handleClickToFavorites} to={Routes.FAVORITES}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={avatarUrl} alt={'avatar'} style={{borderRadius: '50%'}}/>
            </div>
            <span className="header__user-name user__name"data-testid="user-email">{email}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            onClick={handleClick}
            to={Routes.ROOT}
          >
            <span className="header__signout" data-testid="signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

UserNavigationAuthorized.propTypes = {
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default UserNavigationAuthorized;
