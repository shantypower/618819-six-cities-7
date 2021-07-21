export const ListSettings = {
  offersQuantity: 5,
};

export const Routes = {
  LOGIN: '/login',
  ROOT: '/',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  NOT_FOUND: '/notFound',
};

export const ResponseCodes = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  REVIEWS: '/comments/',
  NEARBY: '/nearby',
  FAVORITES: '/favorite/',
};

export const OfferTypeSettings = {
  MAIN: {
    articleClass: 'cities__place-card place-card',
    imageContainerClass: 'cities__image-wrapper place-card__image-wrapper',
    infoContainerClass: 'place-card__info',
  },

  FAVORITES: {
    articleClass: 'favorites__card place-card',
    imageContainerClass: 'favorites__image-wrapper place-card__image-wrapper',
    infoContainerClass: 'favorites__card-info place-card__info',
  },

  NEARBY: {
    articleClass: 'near-places__card place-card',
    imageContainerClass: 'near-places__image-wrapper place-card__image-wrapper',
  },
};

export const ButtonTypes = {
  LIST_ITEM: 'LIST_ITEM',
  LIST_ITEM_DETAIL: 'LIST_ITEM_DETAIL',
};

export const FAVORITE_BUTTON_SETTINGS = {
  'LIST_ITEM': {
    CLASS: 'place-card',
    WIDTH: 18,
    HEIGHT: 19,
  },
  'LIST_ITEM_DETAIL': {
    CLASS: 'property',
    WIDTH: 31,
    HEIGHT: 33,
  },
};

export const LogoSettings = {
  HEADER: {
    width: 81,
    height: 41,
    linkClass: 'header__logo-link header__logo-link--active',
    imageClass: 'header__logo',
  },

  FOOTER: {
    width: 64,
    height: 33,
    linkClass: 'footer__logo-link',
    imageClass: 'footer__logo',
  },
};

export const OfferImageSettings = {
  MAIN: {
    width: 260,
    height: 200,
  },

  FAVORITES: {
    width: 150,
    height: 110,
  },
};

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP: 'Top rated first',
};

export const DEFAULT_CITY = 'Paris';

export const DEFAULT_SORT_TYPE = SortTypes.POPULAR;

export const MAX_ROOMS_PER_PAGE = 3;

export const MIN_REVIEW_LENGTH = 50;

export const MAX_REVIEW_LENGTH = 300;

export const MAX_REVIEWS_COUNT = 10;

export const LOCATIONS = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    },
  },
];
