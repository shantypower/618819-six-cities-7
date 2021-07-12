import dayjs from 'dayjs';
import {AuthorizationStatus, SortTypes} from '../const';

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
export const formatDate = (date) => dayjs(date).format('MMMM YYYY');

export const getSortedOffers = (offers, sortingType) => {
  switch (sortingType){
    case SortTypes.POPULAR:
      return offers;
    case SortTypes.PRICE_LOW:
      return offers
        .slice()
        .sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
    case SortTypes.PRICE_HIGH:
      return offers
        .slice()
        .sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
    case SortTypes.TOP:
      return offers
        .slice()
        .sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
    default:
      return offers;
  }
};
