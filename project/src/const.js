import dayjs from 'dayjs';
export const ListSettings = {
  offersQuantity: 5,
};

export const Routes = {
  LOGIN: '/login',
  ROOT: '/',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
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

export const formatDate = (date) => dayjs(date).format('MMMM YYYY');
