import {
  setCity,
  setHasPostedComment,
  setSortType,
  setCommentError
} from '../action';
import {MainPageSetting} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  city: MainPageSetting.DEFAULT_CITY,
  activeSortType: MainPageSetting.DEFAULT_SORT_TYPE,
  isCommentError: false,
  hasPostedComment: {
    hasPosted: true,
    comment: '',
    rating: 0,
  },
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(setCommentError, (state, action) => {
      state.isCommentError = action.payload;
    })
    .addCase(setHasPostedComment, (state, action) => {
      state.hasPostedComment = {
        hasPosted: action.payload.hasPosted,
        comment: action.payload.comment,
        rating: action.payload.rating,
      };
    });
});

export {ui};
