import React from 'react';
import PropTypes from 'prop-types';
import {Routes, FAVORITE_BUTTON_SETTINGS, AuthorizationStatus} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {addOfferToFavorites} from '../../store/api-actions';
import { useHistory } from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selectors';

function FavoritesButton({ offerId, buttonType, isFavorite}) {

  const dispatch = useDispatch();
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const handleClick = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(Routes.LOGIN);
    }
    dispatch(addOfferToFavorites({ offerId, status: Number(!isFavorite)}));
  };

  return (
    <button
      className={`${FAVORITE_BUTTON_SETTINGS[buttonType].CLASS}__bookmark-button ${isFavorite ? `${FAVORITE_BUTTON_SETTINGS[buttonType].CLASS}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={`${FAVORITE_BUTTON_SETTINGS[buttonType].CLASS}__bookmark-icon`}
        style={{width: FAVORITE_BUTTON_SETTINGS[buttonType].WIDTH, height: FAVORITE_BUTTON_SETTINGS[buttonType].HEIGHT}}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  offerId: PropTypes.number.isRequired,
  buttonType: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default FavoritesButton;
