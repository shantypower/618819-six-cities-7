import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './not-found-page';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

let history = null;
let store = null;
describe('Component: NotFoundPage', () => {
  history = createMemoryHistory();
  const createFakeStore = configureStore({});
  store = createFakeStore({});
  it('should render correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </Provider>);
    const linkElement = getByText('Return to the main page');
    expect(linkElement).toBeInTheDocument();
  });
});
