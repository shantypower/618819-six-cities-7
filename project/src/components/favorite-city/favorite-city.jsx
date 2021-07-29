import React from 'react';
import PropTypes from 'prop-types';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import {mapOffersByCity} from '../../utils/common';
import FavoriteListItem from '../favorite-list-item/favorite-list-item';

function FavoriteCity(props) {
  const {offers} = props;
  const offersByCity = mapOffersByCity(offers);
  return(
    <ul className="favorites__list">
      {[...offersByCity.keys()]
        .map((city) => <FavoriteListItem city={city} key={city} favoritesByCity={offersByCity.get(city)}/>)}
    </ul>
  );
}

FavoriteCity.propTypes = {
  offers: PropTypes.arrayOf(
    offerListItemProp,
  ),
};

export default FavoriteCity;
