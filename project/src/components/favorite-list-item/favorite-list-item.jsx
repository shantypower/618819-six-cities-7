import React from 'react';
import PropTypes from 'prop-types';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import {AppRoute, OfferTypeSetting, OfferImageSetting} from '../../const';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setCity} from '../../store/action';
import OffersList from '../offers-list/offers-list';
import {getActiveSortType} from '../../store/ui/selectors';

function FavoriteListItem({ favoritesByCity, city }) {

  const dispatch = useDispatch();
  const activeSortType = useSelector(getActiveSortType);

  const handleClick = () => {
    dispatch(setCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.ROOT} onClick={handleClick}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList offers={favoritesByCity} activeSortType={activeSortType} offerImageSetting={OfferImageSetting.FAVORITES} type={OfferTypeSetting.FAVORITES}/>
      </div>
    </li>
  );
}

FavoriteListItem.propTypes = {
  favoritesByCity: PropTypes.arrayOf(
    offerListItemProp,
  ),
  city: PropTypes.string.isRequired,
};

export default FavoriteListItem;
