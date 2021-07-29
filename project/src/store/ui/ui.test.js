import {
  setCity,
  setHasPostedComment,
  setSortType
} from '../action';

import {ui} from './ui';

import {SortTypes, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../const';

const state = {
  city: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  hasPostedComment: {
    hasPosted: false,
    comment: '',
    rating: 0,
  },
};

describe('Reducer: ui', () => {
  it('should change current city with a given value', () => {

    expect(ui(state, setCity('Paris')))
      .toEqual({...state, city: 'Paris'});
  });

  it('should change sort type to a given value', () => {

    expect(ui(state, setSortType(SortTypes.POPULAR)))
      .toEqual({...state, activeSortType: SortTypes.POPULAR});
  });

  it('should set posted status to a given value', () => {

    expect(ui(state, setHasPostedComment({
      hasPosted: true,
      comment: '',
      rating: 0,
    })))
      .toEqual({...state, hasPostedComment: {
        hasPosted: true,
        comment: '',
        rating: 0,
      },
      });
  });

});
