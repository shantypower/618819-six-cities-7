export const Routes = {
  LOGIN: '/login',
  ROOT: '/',
  FAVORITES: '/favorites',
  OFFER: '/offer/',
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
