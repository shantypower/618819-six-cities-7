import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import OfferListItem from './offer-list-item';
import {OfferTypeSettings, AuthorizationStatus} from '../../const';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import {ActionType} from '../../store/action';


const mockOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['http://picsum.photos/248/152?r=1'],
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
  title: 'Beautiful & luxurious apartment',
  type: 'apartment',
};

let history = null;
let store = null;

describe('Component: OfferListItem', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it('should render correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <OfferListItem offer={mockOffer} authorizationStatus={AuthorizationStatus.AUTH} cardType={OfferTypeSettings.MAIN}/>
        </Router>
      </Provider>,
    );
    expect(getByText(/Beautiful & luxurious apartment/i)).toBeInTheDocument();
  });

  it('should invoke hover actions user events', () => {

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const {getByTestId} = render(
      <Provider store={store}>
        <Router history={history}>
          <OfferListItem authorizationStatus={AuthorizationStatus.AUTH} offer={mockOffer} cardType={OfferTypeSettings.MAIN}/>
        </Router>
      </Provider>,
    );
    const cardElement = getByTestId('place-card');
    userEvent.hover(cardElement);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: mockOffer.id,
    });

    userEvent.unhover(cardElement);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).nthCalledWith(2, {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: null,
    });
  });
});
