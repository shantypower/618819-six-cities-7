import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import UserNavigationAuthorized from '../user-navigation-authorised/user-navigation-authorized';

let history;
let store;
const mockStore = configureStore({});

describe('Component: UserNavigationAuthorized', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly for authorized user', () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <UserNavigationAuthorized email={'test@test.com'} avatarUrl={'test1.jpg'}/>
        </Router>
      </Provider>);

    expect(screen.getByTestId(/user-email/i)).toHaveTextContent('test@test.com');
    expect(screen.getByTestId(/user-email/i)).toBeInTheDocument();
    expect(screen.getByTestId(/signout/i)).toBeInTheDocument();
  });
});
