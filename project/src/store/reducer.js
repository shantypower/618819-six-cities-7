import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus} from '../const';
import reviews from '../mocks/reviews';
import {ActionType} from './action';

const initialState = {
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
  reviews: reviews,
  offers: [],
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
