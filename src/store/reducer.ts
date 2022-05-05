import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, loadFavoriteOffers, requireAuthorization, setUserEmail, setUserAvatarUrl, setReviews} from './action';
import {Offer} from '../types/offer';
import { Review } from '../types/review';
import {AuthorizationStatus} from '../consts';

type InitialState = {
  city: string;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  favoriteOffers: Offer[];
  userEmail: string;
  avatarUrl: string;
  reviews: Review[];
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  favoriteOffers: [],
  userEmail: '',
  avatarUrl: '',
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setUserAvatarUrl, (state, action) => {
      state.avatarUrl = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
