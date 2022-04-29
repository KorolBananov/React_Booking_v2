import {Cities, SortTypes} from '../consts';
import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList, changeSortType} from './action';

const initialState = {
  Cities,
  currentCity: Cities[0],
  offers: offers,
  currentSortType: SortTypes.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload;
    });
});

export {reducer};
