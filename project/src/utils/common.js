import dayjs from 'dayjs';
import {AuthorizationStatus, SortType} from '../const';

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
export const formatDate = (date) => dayjs(date).format('MMMM YYYY');

export const getSortedOffers = (offers, sortingType) => {
  switch (sortingType){
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_LOW:
      return offers
        .slice()
        .sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
    case SortType.PRICE_HIGH:
      return offers
        .slice()
        .sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
    case SortType.TOP:
      return offers
        .slice()
        .sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
    default:
      return offers;
  }
};

export const removeOffer = (offers, offerToRemove) => {
  const {id} = offerToRemove;
  const index = offers.findIndex((item) => item.id === id);
  if (index !== -1) {
    offers.splice(index, 1);
  }
  return offers;
};

export const updateOffers = (offers, updatedOffer) => {
  const { id } = updatedOffer;
  const index = offers.findIndex((item) => item.id === id);
  if (index !== -1) {
    offers[index].isFavorite = updatedOffer.isFavorite;
  }
  return offers;
};

export const updateOfferIsFavorite = (currentOffer, updatedOffer) => {
  if (currentOffer && currentOffer.id === updatedOffer.id) {
    currentOffer.isFavorite = updatedOffer.isFavorite;
  }
  return currentOffer;
};

export const mapOffersByCity = (offers) => {
  const offersByCity = new Map();
  offers.forEach((offer) => {
    const currentCity = offer.city.name;
    if (offersByCity.has(currentCity)) {
      offersByCity.get(currentCity).push(offer);
    } else {
      const currentOffers = [offer];
      offersByCity.set(currentCity, currentOffers);
    }
  });
  return offersByCity;
};
