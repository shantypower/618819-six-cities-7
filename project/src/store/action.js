export const ActionType = {
  SET_CITY: 'cities/setCity',
  SET_SORT_TYPE: 'setSortType',
  LOAD_OFFERS: 'offers/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_USER: 'user/setUser',
  LOAD_REVIEWS: 'comments/loadComments',
  LOAD_OFFERS_NEARBY: 'offers/loadOffersNearby',
  SET_ARE_REVIEWS_LOADED: 'offers/setAreReviewsLoaded',
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
  setAreReviewsLoaded: (areLoaded) => ({
    type: ActionType.SET_ARE_REVIEWS_LOADED,
    payload: areLoaded,
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
};
