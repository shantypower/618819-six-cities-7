import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus,MainPageSetting} from '../../const';
import App from './app';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';

let history = null;
let store = null;
let fakeApp = null;
let api = null;

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

const reviews = [
  {
    comment: 'first fake comment.',
    date: '2019-05-08T14:13:56.569Z',
    id: 0,
    rating: 5,
    user: {
      avatarUrl: 'test avatar',
      name: 'test name',
      id: 0,
      isPro: false,
    },
  },
  {
    comment: 'second fake comment.',
    date: '2019-08-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'test avatar',
      name: 'test name',
      id: 1,
      isPro: false,
    },
  },
];

const offer = {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Cable TV', 'Coffee machine'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 1,
    isPro: true,
    name: 'Angelina',
  },
  id: 0,
  images: ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 52.36129248736812,
    longitude: 4.930045185368442,
    zoom: 8,
  },
  maxAdults: 2,
  previewImage: 'http://picsum.photos/248/152?r=1',
  price: 320,
  rating: 3.4,
  title: 'Beautiful & luxurious hotel at great location',
  type: 'hotel',
};

const favoriteOffers = [
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
    title: 'Test title',
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
    rating: 4,
  },
  {
    id: 4,
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
    rating: 4,
  },
  {
    id: 5,
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
    rating: 4,
  },
];

const nearbyOffers = [
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
    title: 'first nearby offer',
    rating: 4,
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
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
  {
    id: 4,
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
    isFavorite: true,
    title: 'second nearby offer',
    rating: 5,
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
    title: 'third nearby offer',
    rating: 3,
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
    isPremium: false,
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
  },
];

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createAPI(() => {});
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          name: '',
          email: '',
          avatarUrl: '',
          isPro: false,
          id: null,
        },
      },
      DATA: {
        offers: offers,
        reviews: reviews,
        offersNearby: nearbyOffers,
        favoriteOffers: favoriteOffers,
        currentOffer: offer,
        isDataLoaded: true,
        isOfferLoaded: true,
        areReviewsLoaded: true,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: true,
      },
      UI: {
        city: MainPageSetting.DEFAULT_CITY,
        activeSortType: MainPageSetting.DEFAULT_SORT_TYPE,
        activeOfferId: 0,
        hasPostedComment: {
          hasPosted: true,
          comment: '',
          rating: 0,
        },
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage"', () => {
    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

});
