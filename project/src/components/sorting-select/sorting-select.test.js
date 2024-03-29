import React from 'react';
import { render } from '@testing-library/react';
import SortingSelect from './sorting-select';
import configureStore from 'redux-mock-store';
import {MainPageSetting, SortType} from '../../const';
import {Provider} from 'react-redux';

describe('Component: SortingSelect', () => {
  it('should render correctly', () => {

    const mockFunction = jest.fn();
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      UI: {
        activeSortType: MainPageSetting.DEFAULT_SORT_TYPE,
      },
    });
    const { getAllByTestId } = render(
      <Provider store={store}>
        <SortingSelect onSortTypeClick={mockFunction} onSetIsSortOpen={mockFunction}/>
      </Provider>,
    );

    const optionsElements = getAllByTestId('sorting-option');

    expect(optionsElements).toHaveLength(Object.keys(SortType).length);
  });
});
