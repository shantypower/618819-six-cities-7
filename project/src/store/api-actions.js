import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, Routes} from '../const';
import {adaptOffer, adaptReviewData, adaptUserData} from '../adapter/adapter';

export const getOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOffer(offer));
      return offers;
    })
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const getOffer = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setOfferLoadingStatus(false));
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      const offer = adaptOffer(data);
      dispatch(ActionCreator.loadOffer(offer));
    })
    .then(() => dispatch(ActionCreator.setOfferLoadingStatus(true)))
    .catch(() => {
      dispatch(ActionCreator.redirectToRoute(Routes.NOT_FOUND));
    });
};

export const getReviews = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setAreReviewsLoaded(false));
  api.get(`/comments/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewData(review));
      dispatch(ActionCreator.loadReviews(reviews));
    })
    .catch(() => dispatch(ActionCreator.loadReviews([])))
    .finally(() => dispatch(ActionCreator.setAreReviewsLoaded(true)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(adaptUserData(data)));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Routes.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
