import {data} from './data';
import {ActionType} from '../action';

const state = {
  offers: [],
  reviews: [],
  offersNearby: [],
  favoriteOffers: [],
  currentOffer: null,
  isOfferLoaded: false,
  isDataLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
  areFavoriteOffersLoaded: false,
};

const offers =  [{
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'isFavorite': false,
  'is_premium': false,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/apartment-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 2,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'isFavorite': false,
  'is_premium': true,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/apartment-01.jpg',
  'price': 180,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
];

const favoriteOffers =  [{
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'isFavorite': true,
  'is_premium': false,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/apartment-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 2,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'isFavorite': true,
  'is_premium': true,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/apartment-01.jpg',
  'price': 180,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
];

const reviews = [{
  'comment': 'Fugiat et cupidatat irure occaecat ex.',
  'date': '2020-08-08T22:13:00.569Z',
  'id': 1,
  'rating': 4,
  'user': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 4,
    'is_pro': false,
    'name': 'Angelina',
  },
},
];

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual(state);
  });

  it('should update offers by load offers', () => {
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(data(state, loadOffersAction))
      .toEqual({...state, isDataLoaded: true, offers: offers});
  });

  it('should update current offer by load offer', () => {

    const loadOfferAction = {
      type: ActionType.LOAD_OFFER,
      payload: offers[0],
    };

    expect(data(state, loadOfferAction))
      .toEqual({...state, currentOffer: offers[0]});
  });

  it('should update reviews by load reviews', () => {

    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(data(state, loadReviewsAction))
      .toEqual({...state, reviews: reviews});
  });

  it('should set isDataLoaded status to the given value', () => {

    const setIsDataLoadedAction = {
      type: ActionType.SET_IS_DATA_LOADED,
      payload: true,
    };

    expect(data(state, setIsDataLoadedAction))
      .toEqual({...state, isDataLoaded: true});
  });

  it('should set areReviewsLoaded status to the given value', () => {

    const setAreReviewsLoadedAction = {
      type: ActionType.SET_ARE_REVIEWS_LOADED,
      payload: true,
    };

    expect(data(state, setAreReviewsLoadedAction))
      .toEqual({...state, areReviewsLoaded: true});
  });

  it('should get nearby offers by load offers nearby', () => {

    const loadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };

    expect(data(state, loadOffersNearbyAction))
      .toEqual({...state, offersNearby: offers});
  });

  it('should set offer loading status to the given value', () => {

    const setIsOfferLoadedAction = {
      type: ActionType.SET_IS_OFFER_LOADED,
      payload: true,
    };

    expect(data(state, setIsOfferLoadedAction))
      .toEqual({...state, isOfferLoaded: true});
  });

  it('should set areLoadedOffersNearby status to the given value', () => {
    const setAreLoadedOffersNearbyAction = {
      type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
      payload: true,
    };

    expect(data(state, setAreLoadedOffersNearbyAction))
      .toEqual({...state, areLoadedOffersNearby: true});
  });
  it('should update offers with the given favorite offer', () => {

    const updatedOffers = offers;

    const updatedFavoriteOffers = offers;

    const updatedNearbyOffers = offers;

    const nearbyOffers = offers;

    const favoriteOffer = favoriteOffers[0];

    const offerToUpdate = favoriteOffers[0];

    const currentState = {
      offers: offers,
      reviews: reviews,
      offersNearby: nearbyOffers,
      favoriteOffers: favoriteOffers,
      currentOffer: offerToUpdate,
      isDataLoaded: true,
      isOfferLoaded: true,
      areReviewsLoaded: true,
      areLoadedOffersNearby: true,
      areFavoriteOffersLoaded: true,
    };

    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: favoriteOffer,
    };

    expect(data(currentState, updateOfferAction))
      .toEqual({
        offers: updatedOffers,
        reviews: reviews,
        offersNearby: updatedNearbyOffers,
        favoriteOffers: updatedFavoriteOffers,
        currentOffer: favoriteOffer,
        isDataLoaded: true,
        isOfferLoaded: true,
        areReviewsLoaded: true,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: true,
      });
  });

  it('should update favorite offers by load favorite offers', () => {

    const loadFavoriteOffersAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };

    expect(data(state, loadFavoriteOffersAction))
      .toEqual({...state, favoriteOffers: favoriteOffers, areFavoriteOffersLoaded: true});
  });

  it('should set areFavoriteOffersLoaded status to the given value', () => {

    const setAreFavoriteOffersLoadedAction = {
      type: ActionType.SET_ARE_FAVORITE_OFFERS_LOADED,
      payload: true,
    };

    expect(data(state, setAreFavoriteOffersLoadedAction))
      .toEqual({...state, areFavoriteOffersLoaded: true});
  });
});
