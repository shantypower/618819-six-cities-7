export const ActionType = {
  SET_CITY: 'cities/setCity',
  SET_SORT_TYPE: 'setSortType',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_OFFER: 'offers/loadOffer',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_USER: 'user/setUser',
  LOAD_REVIEWS: 'comments/loadComments',
  LOAD_OFFERS_NEARBY: 'offers/loadOffersNearby',
  SET_ARE_REVIEWS_LOADED: 'offers/setAreReviewsLoaded',
  SET_IS_OFFER_LOADED: 'offers/setIsOfferLoaded',
  SET_ARE_LOADED_OFFERS_NEARBY: 'offers/setAreLoadedOffersNearby',
  SET_HAS_POSTED_COMMENT: 'comments/setHasPostedComment',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  setAreReviewsLoaded: (areLoaded) => ({
    type: ActionType.SET_ARE_REVIEWS_LOADED,
    payload: areLoaded,
  }),
  setOfferLoadingStatus: (isLoaded) => ({
    type: ActionType.SET_IS_OFFER_LOADED,
    payload: isLoaded,
  }),
  setAreLoadedOffersNearby: (areLoaded) => ({
    type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
    payload: areLoaded,
  }),
  setHasPostedComment: (hasPosted) => ({
    type: ActionType.SET_HAS_POSTED_COMMENT,
    payload: hasPosted,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  setUser: (userData) => ({
    type: ActionType.SET_USER,
    payload: userData,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadOffersNearby: (offers) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offers,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};
