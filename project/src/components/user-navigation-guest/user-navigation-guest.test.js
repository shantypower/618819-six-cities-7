import React from 'react';
import {render} from '@testing-library/react';
import UserNavigationGuest from './user-navigation-guest';
import {Router} from 'react-router';
import {createMemoryHistory} from 'history';


describe('Component: UserNavigationGuest', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <UserNavigationGuest />
      </Router>);
    const linkElement = getByText('Sign in');

    expect(linkElement).toBeInTheDocument();
  });
});
