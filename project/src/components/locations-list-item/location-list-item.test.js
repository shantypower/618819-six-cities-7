import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import LocationsListItem from './locations-list-item';
import userEvent from '@testing-library/user-event';


let history=null;
let store;
const mockStore = configureStore({});


describe('Component: LocationsListItem', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {

    store = mockStore({
      UI: {city: 'Paris'},
    });
    const onClick = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <LocationsListItem name={'Paris'} onClick={onClick} isActive={false}/>
        </Router>
      </Provider>);

    expect(screen.getByText('Paris')).toBeInTheDocument();
    userEvent.click(screen.getByText('Paris'));
    expect(onClick).toBeCalled();
  });
});
