import {
  loadOffers,
  setOfferLoadingStatus,
  redirectToRoute,
  loadOffer,
  setAreReviewsLoaded,
  setAreLoadedOffersNearby,
  setHasPostedComment,
  loadOffersNearby,
  loadReviews,
  logout,
  requireAuthorization,
  setUser
} from './action';
import {AuthorizationStatus, APIRoute, Routes, ResponseCodes} from '../const';
import {ActionCreator} from './action';
import {adaptOffer, adaptReviewData, adaptUserData} from '../adapter/adapter';
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();

export const getOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOffer(offer));
      return offers;
    })
    .then((offers) => dispatch(loadOffers(offers)))
);

export const getOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setOfferLoadingStatus(false));
  api.get(`/hotels/${id}`)
    .then((response) => {
      const {data} = response;
      const offer = adaptOffer(data);
      dispatch(loadOffer(offer));
    })
    .then(() => dispatch(ActionCreator.setOfferLoadingStatus(true)))
    .catch((error) => {
      if ((error.response.status === ResponseCodes.NOT_FOUND || error.response.status === ResponseCodes.BAD_REQUEST)) {
        dispatch(redirectToRoute(Routes.NOT_FOUND));
      }
      dispatch(redirectToRoute(Routes.NOT_FOUND));
      browserHistory.push(Routes.NOT_FOUND);
    });
};

export const getReviews = (id) => (dispatch, _getState, api) => {
  dispatch(setAreReviewsLoaded(false));
  api.get(`/comments/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewData(review));
      dispatch(loadReviews(reviews));
    })
    .catch(() => dispatch(loadReviews([])))
    .finally(() => dispatch(setAreReviewsLoaded(true)));
};

export const getNearby = (id) => (dispatch, _getState, api) => {
  dispatch(setAreLoadedOffersNearby(false));
  api.get(`/hotels/${id}/nearby`)
    .then(({ data }) => {
      const offers = data.map((offer) => adaptOffer(offer));
      dispatch(loadOffersNearby(offers));
    })
    .catch(() => dispatch(loadOffersNearby([])))
    .finally(() => dispatch(setAreLoadedOffersNearby(true)));
};

export const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(setAreReviewsLoaded(false));
  return api.post(`/comments/${id}`, {comment, rating})
    .then((response) => {
      const { status, data } = response;
      if (status !== ResponseCodes.SUCCESS) {
        dispatch(setHasPostedComment({hasPosted: false, comment: comment, rating: rating}));
      } else {
        const comments = data.map(adaptReviewData);
        dispatch(setHasPostedComment({hasPosted: true, comment: comment, rating: rating}));
        dispatch(loadReviews(comments));
        dispatch(setAreReviewsLoaded(true));
      }
    })
    .catch(() => {
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(adaptUserData(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const signin = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUser(adaptUserData(data)));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(Routes.ROOT)))
);

export const signout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()))
);
