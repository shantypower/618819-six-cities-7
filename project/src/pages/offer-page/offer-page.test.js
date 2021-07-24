import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import OfferPage from './offer-page';
import Spinner from '../../components/spinner/spinner';
import {AuthorizationStatus, DEFAULT_CITY} from '../../const';
import {createAPI} from '../../services/api';
import thunk from 'redux-thunk';
import {Route} from 'react-router';

const offers = [
  {
    id: 0,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    price: 300,
    isFavorite: false,
    type: 'hotel',
    goods: ['Heating', 'Kitchen'],
    bedrooms: 1,
    description: 'test description',
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['image'],
    title: 'title',
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
  {
    id: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    price: 200,
    goods: ['Heating', 'Kitchen'],
    description: 'test description',
    isFavorite: false,
    type: 'hotel',
    bedrooms: 1,
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['image'],
    title: 'title',
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
  {
    id: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    price: 500,
    goods: ['Heating', 'Kitchen'],
    description: 'test description',
    isFavorite: false,
    type: 'hotel',
    bedrooms: 1,
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['image'],
    title: 'title',
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
  {
    id: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    price: 300,
    goods: ['Heating', 'Kitchen'],
    description: 'test description',
    isFavorite: true,
    type: 'hotel',
    bedrooms: 1,
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['image'],
    title: 'title',
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
  {
    id: 4,
    city: 'Paris',
    price: 200,
    description: 'test description',
    isFavorite: true,
    type: 'hotel',
    bedrooms: 1,
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['image'],
    title: 'title',
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
  {
    id: 5,
    city: 'Brussels',
    price: 500,
    goods: ['Heating', 'Kitchen'],
    description: 'test description',
    isFavorite: true,
    type: 'hotel',
    bedrooms: 1,
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8,
    },
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    images: ['image'],
    title: 'title',
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
];


let history;
let store;
let api = null;


describe('Component: OfferPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createAPI(() => {});
  });

  it('should render correctly when data is not loaded', () => {
    history.push('/offer/7');
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        offers: [],
        reviews: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'test avatar',
          email: 'test@test.com',
          id: 1,
          isPro: false,
          name: 'Test',
        },
      },
      UI: {city: DEFAULT_CITY},
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route to='/offer/7'>
            <Spinner />
          </Route>
        </Router>
      </Provider>);

    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });

  it('should render correctly when data is loaded', () => {
    history.push('/offer/7');
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      DATA: {
        offers: offers,
        reviews: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: offers[1],
        isDataLoaded: true,
        isOfferLoaded: true,
        areReviewsLoaded: false,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'test avatar',
          email: 'test@test.com',
          id: 1,
          isPro: false,
          name: 'Test',
        },
      },
      UI: {city: DEFAULT_CITY},
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route to='/offer/7'>
            <OfferPage />
          </Route>
        </Router>
      </Provider>);

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
