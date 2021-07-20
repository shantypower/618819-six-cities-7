import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus} from '../const';
import {ActionType} from './action';

const initialState = {
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
  reviews: [],
  offers: [],
  currentOffer: null,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  isOfferLoaded: false,
  hasPostedComment: {
    hasPosted: false,
    comment: '',
    rating: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: {
          avatarUrl: action.payload.avatarUrl,
          email: action.payload.email,
          id: action.payload.id,
          isPro: action.payload.isPro,
          name: action.payload.name,
        },
      };
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.SET_ARE_REVIEWS_LOADED:
      return {
        ...state,
        areReviewsLoaded: action.payload,
      };
    case ActionType.SET_IS_OFFER_LOADED:
      return {
        ...state,
        isOfferLoaded: action.payload,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.SET_ARE_LOADED_OFFERS_NEARBY:
      return {
        ...state,
        areLoadedOffersNearby: action.payload,
      };
    case ActionType.SET_HAS_POSTED_COMMENT:
      return {
        ...state,
        hasPostedComment: {
          hasPosted: action.payload.hasPosted,
          comment: action.payload.comment,
          rating: action.payload.rating,
        },
      };
    case ActionType.REDIRECT_TO_ROUTE:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
