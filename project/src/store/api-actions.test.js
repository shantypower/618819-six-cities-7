import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  getOffers,
  getOffer,
  getReviews,
  getNearby,
  sendComment,
  checkAuth,
  signin,
  addOfferToFavorites,
  fetchFavoriteOffers
} from './api-actions';

import {APIRoute, Routes, AuthorizationStatus} from '../const';

import {adaptReviewData, adaptOffer, adaptUserData} from '../adapter/adapter';

let api = null;

const review = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

const fakeOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 3,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const comment = 'Very comfortable and cheap!';
const rating = 5;

const fakeReview = {
  comment: 'Very comfortable and cheap!',
  date: '2021-07-15T14:13:56.569Z',
  id: 1,
  rating: 5,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

const fakeUser = {
  'avatarUrl': 'Test avatar',
  email: 'test@test.com',
  id: 1,
  'isPro': false,
  name: 'Test',
  token: 'gg999h99gf9h9h9g99',
};

describe('Async operations', () => {

  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = getOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [fakeOffer]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptOffer(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 3;
    const offerLoader = getOffer(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}${offerId}`)
      .reply(200, fakeOffer);

    return offerLoader(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_OFFER_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: adaptOffer(fakeOffer),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_OFFER_LOADED,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Routes.NOT_FOUND,
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const reviewsLoader = getReviews(offerId);

    apiMock
      .onGet(`${APIRoute.REVIEWS}${offerId}`)
      .reply(200, [review]);

    return reviewsLoader(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_REVIEWS_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewData(review)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_ARE_REVIEWS_LOADED,
          payload: true,
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 3;
    const offersNearbyLoader = getNearby(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}${offerId}${APIRoute.NEARBY}`)
      .reply(200, [fakeOffer]);

    return offersNearbyLoader(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [adaptOffer(fakeOffer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
          payload: true,
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const reviewSender = sendComment({id: offerId, comment: comment, rating: rating});

    apiMock
      .onPost(`${APIRoute.REVIEWS}${offerId}`, {comment, rating})
      .reply(200, [fakeReview]);

    return reviewSender(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);


        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_REVIEWS_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_HAS_POSTED_COMMENT,
          payload: {hasPosted: true, comment: comment, rating: rating},
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewData(fakeReview)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SET_ARE_REVIEWS_LOADED,
          payload: true,
        });
      });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: adaptUserData(fakeUser),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = signin({login: fakeUser.email, password: '123456' });

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: adaptUserData(fakeUser),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Routes.ROOT,
        });
      });
  });

  it('should make a correct API call to POST /favorite/:id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const status = 0;
    const addToFavoritesSender = addOfferToFavorites({offerId, status});

    apiMock
      .onPost(`${APIRoute.FAVORITES}${offerId}/${status}`)
      .reply(200, fakeOffer);

    return addToFavoritesSender(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptOffer(fakeOffer),
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [fakeOffer]);

    return favoritesOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_FAVORITE_OFFERS_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [fakeOffer],
        });

      });
  });
});
