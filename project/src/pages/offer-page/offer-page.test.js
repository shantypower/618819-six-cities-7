import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import OfferPage from './offer-page';
import {AuthorizationStatus, DEFAULT_CITY} from '../../const';
import {createAPI} from '../../services/api';
import thunk from 'redux-thunk';
import {Route} from 'react-router';


let history;
let store;
let api = null;


describe('Component: OfferPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createAPI(() => {});
  });

  it('should render correctly when data is loaded', () => {
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
            <OfferPage />
          </Route>
        </Router>
      </Provider>);

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
