import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_CITY: 'cities/setCity',
  SET_SORT_TYPE: 'setSortType',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_OFFER: 'offers/loadOffer',
  SET_ACTIVE_OFFER: 'offers/setActiveOffer',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_USER: 'user/setUser',
  LOAD_REVIEWS: 'comments/loadComments',
  LOAD_OFFERS_NEARBY: 'offers/loadOffersNearby',
  SET_IS_DATA_LOADED: 'cities/isLoaded',
  SET_ARE_REVIEWS_LOADED: 'offers/setAreReviewsLoaded',
  SET_IS_OFFER_LOADED: 'offers/setIsOfferLoaded',
  SET_ARE_LOADED_OFFERS_NEARBY: 'offers/setAreLoadedOffersNearby',
  SET_HAS_POSTED_COMMENT: 'comments/setHasPostedComment',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
};

export const setCity = createAction(ActionType.SET_CITY, (city) => ({
  payload: city,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (activeOfferId) => ({
  payload: activeOfferId,
}));

export const setIsDataLoaded = createAction(ActionType.SET_IS_DATA_LOADED, (isLoaded) => ({
  payload: isLoaded,
}));

export const setAreReviewsLoaded = createAction(ActionType.SET_ARE_REVIEWS_LOADED, (areLoaded) => ({
  payload: areLoaded,
}));

export const setOfferLoadingStatus = createAction(ActionType.SET_IS_OFFER_LOADED, (isLoaded) => ({
  payload: isLoaded,
}));

export const setAreLoadedOffersNearby = createAction(ActionType.SET_ARE_LOADED_OFFERS_NEARBY, (areLoaded) => ({
  payload: areLoaded,
}));

export const setHasPostedComment = createAction(ActionType.SET_HAS_POSTED_COMMENT, (hasPosted) => ({
  payload: hasPosted,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const setUser = createAction(ActionType.SET_USER, (userData) => ({
  payload: userData,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers) => ({
  payload: offers,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));
