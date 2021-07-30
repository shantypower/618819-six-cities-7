import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute, FavoriteButtonSetting, AuthorizationStatus} from '../../const';
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
      history.push(AppRoute.LOGIN);
    }
    dispatch(addOfferToFavorites({ offerId, status: Number(!isFavorite)}));
  };

  return (
    <button
      className={`${FavoriteButtonSetting[buttonType].CLASS}__bookmark-button ${isFavorite ? `${FavoriteButtonSetting[buttonType].CLASS}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={`${FavoriteButtonSetting[buttonType].CLASS}__bookmark-icon`}
        style={{width: FavoriteButtonSetting[buttonType].WIDTH, height: FavoriteButtonSetting[buttonType].HEIGHT}}
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
