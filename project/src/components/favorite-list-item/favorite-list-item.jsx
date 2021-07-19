import React from 'react';
import PropTypes from 'prop-types';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import {Routes, OfferTypeSettings, OfferImageSettings} from '../../const';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setCity} from '../../store/action';
import OffersList from '../offers-list/offers-list';
import {getActiveSortType} from '../../store/ui/selectors';

function FavoritesListItem({ favoritesByCity, city }) {

  const dispatch = useDispatch();
  const activeSortType = useSelector(getActiveSortType);

  const handleClick = () => {
    dispatch(setCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={Routes.ROOT} onClick={handleClick}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <OffersList offers={favoritesByCity} activeSortType={activeSortType} offerImageSettings={OfferImageSettings.MAIN} type={OfferTypeSettings.MAIN}/>
    </li>
  );
}

FavoritesListItem.propTypes = {
  favoritesByCity: offerListItemProp,
  city: PropTypes.string.isRequired,
};

export default FavoritesListItem;
