import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Map from './map';
import {AuthorizationStatus} from '../../const';

const mockCity = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: 'Amsterdam',
};

const mockOffers = [
  {
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
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3', 'http://picsum.photos/248/152?r=4', 'http://picsum.photos/248/152?r=5', 'http://picsum.photos/248/152?r=6'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'http://picsum.photos/248/152?r=7',
    price: 120,
    rating: 2.3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Elizabeth',
    },
    id: 2,
    images: ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3', 'http://picsum.photos/248/152?r=4', 'http://picsum.photos/248/152?r=5', 'http://picsum.photos/248/152?r=6'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.36632405116683,
      longitude: 4.835288109409351,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=5',
    price: 220,
    rating: 4.4,
    title: 'Beautiful & luxurious house at great location',
    type: 'house',
  },
  {
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
      name: 'Oliver',
    },
    id: 3,
    images: ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3', 'http://picsum.photos/248/152?r=4', 'http://picsum.photos/248/152?r=5', 'http://picsum.photos/248/152?r=6'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.36129248736812,
      longitude: 4.930045185368442,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=6',
    price: 320,
    rating: 3.4,
    title: 'Beautiful & luxurious hotel at great location',
    type: 'hotel',
  },
  {
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
    goods: ['Heating', 'Coffee machine'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'John',
    },
    id: 4,
    images: ['http://picsum.photos/248/152?r=1'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.38225355642883,
      longitude: 4.85520082827032,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=3',
    price: 70,
    rating: 4.7,
    title: 'Beautiful & luxurious room at great location',
    type: 'room',
  },
  {
    bedrooms: 1,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Coffee machine'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'John',
    },
    id: 4,
    images: ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3', 'http://picsum.photos/248/152?r=4', 'http://picsum.photos/248/152?r=5', 'http://picsum.photos/248/152?r=6'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 48.81929353904051,
      longitude: 2.274273393000697,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=2',
    price: 70,
    rating: 4.7,
    title: 'Beautiful & luxurious room at great location',
    type: 'room',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Elizabeth',
    },
    id: 2,
    images: ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3', 'http://picsum.photos/248/152?r=4', 'http://picsum.photos/248/152?r=5', 'http://picsum.photos/248/152?r=6'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.87532409744568,
      longitude: 2.392376415210578,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/248/152?r=1',
    price: 220,
    rating: 4.4,
    title: 'Beautiful & luxurious house at great location',
    type: 'house',
  },
];

const mockOffer = {
  bedrooms: 2,
  city: {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 2,
    isPro: false,
    name: 'Elizabeth',
  },
  id: 2,
  images: ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3', 'http://picsum.photos/248/152?r=4', 'http://picsum.photos/248/152?r=5', 'http://picsum.photos/248/152?r=6'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 48.87532409744568,
    longitude: 2.392376415210578,
    zoom: 8,
  },
  maxAdults: 2,
  previewImage: 'http://picsum.photos/248/152?r=1',
  price: 220,
  rating: 4.4,
  title: 'Beautiful & luxurious house at great location',
  type: 'house',
};

let store = null;

describe('Component: Map', () => {
  beforeAll(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: { offers: mockOffers, isDataLoaded: true },
      UI: { city: 'Paris', activeOfferId: mockOffer.id },
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH, user: null },
    });
  });

  it('should render correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Map offers={mockOffers} city={mockCity} />
      </Provider>,
    );

    expect(getByTestId('map')).toBeInTheDocument();
  });
});
