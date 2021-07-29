import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import FavoritesEmpty from './favorites-empty';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
let store;
let history = null;

describe('Component: FavoritesEmpty', () => {

  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      UI: {city: 'Brussels'},
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'test1.jpg',
          email: 'test@test.com',
          id: 1,
          isPro: false,
          name: 'Test1',
        },
      },
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesEmpty/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });
});
