import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getCity} from '../ui/selectors';
import {OfferPageSetting} from '../../const';

export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getIsDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getCurrentOffer = (state) => state[NameSpace.DATA].currentOffer;
export const getIsOfferLoadedStatus = (state) => state[NameSpace.DATA].isOfferLoaded;
export const getAreReviewsLoadedStatus = (state) => state[NameSpace.DATA].areReviewsLoaded;
export const getAreLoadedOffersNearbyStatus = (state) => state[NameSpace.DATA].areLoadedOffersNearby;
export const getFavoriteOffersLoadingStatus = (state) => state[NameSpace.DATA].areFavoriteOffersLoaded;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;

export const getCurrentOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city),
);

export const getReviewsSliced = createSelector(
  getReviews,
  (items) => items.slice(0, OfferPageSetting.MAX_REVIEWS_COUNT),
);
