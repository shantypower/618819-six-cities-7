import {
  ActionType,
  setCity,
  setSortType,
  loadOffers,
  loadOffer,
  setActiveOffer,
  setIsDataLoaded,
  setAreReviewsLoaded,
  setOfferLoadingStatus,
  setAreLoadedOffersNearby,
  setHasPostedComment,
  requireAuthorization,
  logout,
  setUser,
  loadReviews,
  loadOffersNearby,
  redirectToRoute,
  updateOffer,
  loadFavoriteOffers,
  setFavoriteOffersLoadingStatus
} from './action';

const offers = [
  {
    id: 1,
    city: 'Brussels',
    price: 150,
  },
  {
    id: 2,
    city: 'Brussels',
    price: 250,
  },
  {
    id: 3,
    city: 'Paris',
    price: 300,
  },
  {
    id: 4,
    city: 'Amsterdam',
    price: 350,
  },
];

describe('Actions', () => {
  it('action creator for set city returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: 'Brussels',
    };
    expect(setCity('Brussels')).toEqual(expectedAction);
  });

  it('action creator for set sorting type for offers list returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: 'Top rated first',
    };
    expect(setSortType('Top rated first')).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading offer returns correct action', () => {
    const offer = {
      id: 10,
      city: 'Dusseldorf',
      price: 200,
    };

    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for setting active offer returns correct action', () => {

    const expectedAction = {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: 5,
    };

    expect(setActiveOffer(5)).toEqual(expectedAction);
  });

  it('action creator for check data loading status returns correct action', () => {
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.SET_IS_DATA_LOADED,
      payload: isLoaded,
    };

    expect(setIsDataLoaded(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for check reviews loading status returns correct action', () => {
    const areLoaded = false;

    const expectedAction = {
      type: ActionType.SET_ARE_REVIEWS_LOADED,
      payload: areLoaded,
    };

    expect(setAreReviewsLoaded(areLoaded)).toEqual(expectedAction);
  });

  it('action creator for check offer loading status returns correct action', () => {
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.SET_IS_OFFER_LOADED,
      payload: isLoaded,
    };

    expect(setOfferLoadingStatus(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for check offers nearby loading status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
      payload: isLoaded,
    };

    expect(setAreLoadedOffersNearby(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for check has posted comment status returns correct action', () => {
    const hasPosted = {
      status: true,
    };

    const expectedAction = {
      type: ActionType.SET_HAS_POSTED_COMMENT,
      payload: hasPosted,
    };

    expect(setHasPostedComment(hasPosted)).toEqual(expectedAction);
  });

  it('action creator for requiring authorization status returns action with correct status', () => {
    const status =  'AUTH';
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {

    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for set user returns correct action', () => {
    const user = {
      username: 'test',
      email: 'test@test.ru',
      id: 1,
      avatarUrl: 'https://7.react.pages.academy/static/avatar/5.jpg',
    };

    const expectedAction = {
      type: ActionType.SET_USER,
      payload: user,
    };

    expect(setUser(user)).toEqual(expectedAction);
  });

  it('action creator for loading reviews returns correct action', () => {
    const reviews = [
      {
        rating: 4,
        text: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
      },
      {
        rating: 3,
        text: 'Bathed in the nature. Completely unplugged. Unforgettable.',
      },
      {
        rating: 5,
        text: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for loading offers nearby returns correct action', () => {

    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };

    expect(loadOffersNearby(offers)).toEqual(expectedAction);
  });

  it('action creator for redirect returns correct action', () => {
    const url = '/login';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for update offer returns correct action', () => {
    const offer = offers[0];

    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(updateOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for loading favorite offers returns correct action', () => {

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };

    expect(loadFavoriteOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for set favorite offers loading status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_ARE_FAVORITE_OFFERS_LOADED,
      payload: isLoaded,
    };

    expect(setFavoriteOffersLoadingStatus(isLoaded)).toEqual(expectedAction);
  });

});
