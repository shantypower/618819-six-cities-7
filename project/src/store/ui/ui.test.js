import {
  setCity,
  setHasPostedComment,
  setSortType,
  setCommentError
} from '../action';

import {ui} from './ui';

import {SortType, MainPageSetting} from '../../const';

const state = {
  city: MainPageSetting.DEFAULT_CITY,
  activeSortType: MainPageSetting.DEFAULT_SORT_TYPE,
  isCommentError: true,
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

    expect(ui(state, setSortType(SortType.POPULAR)))
      .toEqual({...state, activeSortType: SortType.POPULAR});
  });

  it('should change comment post error status to a given value', () => {

    expect(ui(state, setCommentError(false)))
      .toEqual({...state, isCommentError: false});
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
