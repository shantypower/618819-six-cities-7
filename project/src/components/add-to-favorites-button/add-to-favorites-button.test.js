import React from 'react';
import { Provider } from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import AddToFavoritesButton from './add-to-favorites-button';
import {FAVORITE_BUTTON_SETTINGS, ButtonTypes} from '../../const';
import {createMemoryHistory} from 'history';
import {Routes, AuthorizationStatus} from '../../const';
import {Router} from 'react-router-dom';


const mockFavoriteOffer = {
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
  images: ['http://picsum.photos/248/152?r=$2'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'http://picsum.photos/248/152?r=1',
  price: 120,
  rating: 2.3,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};


const mockUnfavoriteOffer =   {
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
  images: ['http://picsum.photos/248/152?r=$2'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'http://picsum.photos/248/152?r=1',
  price: 120,
  rating: 2.3,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

let store = null;
let history = null;


describe('Component AddToFavoritesButton should render correctly', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    history.push(Routes.FAVORITES);
    const mockStore = configureStore({});
    store = mockStore({ USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
    buttonType: ButtonTypes.LIST_ITEM_DETAIL,
    });
  });

  it('AddToFavoritesButton should render correctly if offer is favorite', () => {

    const {getByText, getByRole} = render(
      <Provider store={store}>
        <Router history={history}>
          <AddToFavoritesButton buttonType={'LIST_ITEM_DETAIL'} offerId={mockFavoriteOffer.id} isFavorite={mockFavoriteOffer.isFavorite}/>
        </Router>
      </Provider>);

    const AddToFavoritesButtonElementText = getByText('In bookmarks');
    const AddToFavoritesButtonElement = getByRole('button');

    expect(AddToFavoritesButtonElementText).toBeInTheDocument();
    expect(AddToFavoritesButtonElement).toHaveClass('property__bookmark-button property__bookmark-button--active button');
  });

  it('AddToFavoritesButton should render correctly if offer is not favorite', () => {

    const {getByText, getByRole} = render(
      <Provider store={store}>
        <Router history={history}>
          <AddToFavoritesButton buttonType={'LIST_ITEM_DETAIL'} offerId={mockUnfavoriteOffer.id} isFavorite={mockUnfavoriteOffer.isFavorite} />
        </Router>
      </Provider>,
    );

    const AddToFavoritesButtonElement = getByRole('button');
    const AddToFavoritesButtonElementText = getByText('To bookmarks');

    expect(AddToFavoritesButtonElementText).toBeInTheDocument();
    expect(AddToFavoritesButtonElement).not.toHaveClass('place-card__bookmark-button--active');
  });
});
