import {
  loadReviews,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  setAreLoadedOffersNearby,
  setAreReviewsLoaded,
  setOfferLoadingStatus,
  setIsDataLoaded
} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  offers: [],
  reviews: [],
  offersNearby: [],
  currentOffer: null,
  isOfferLoaded: false,
  isDataLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAreReviewsLoaded, (state, action) => {
      state.areReviewsLoaded = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoaded = action.payload;
    })
    .addCase(setAreLoadedOffersNearby, (state, action) => {
      state.areLoadedOffersNearby = action.payload;
    });
});

export {data};