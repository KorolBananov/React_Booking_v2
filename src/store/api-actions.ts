import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppRoute, AuthorizationStatus} from '../consts';
import {redirectToRoute} from './action';
import {api, store} from './index';
import {Offers} from '../types/offer';
import {AuthData} from '../types/authData';
import {UserData} from '../types/userData';
import {dropToken, saveToken} from '../services/token';
import {errorHandle} from '../services/errorHandle';
import {
  loadCurrentOfferComments,
  loadCurrentOffersNearby,
  loadFavoriteOffers, loadOffers,
  setNewReview
} from './offersData/offersData';
import {Review, ReviewSend} from '../types/review';
import {FavoriteFlagType} from '../types/favorite';
import {saveUserEmail} from '../services/userEmail';
import {requireAuthorization} from './userProcess/userProcess';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/fetchNearbyOffers',
  async (id: number) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadCurrentOffersNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCurrentOfferComments = createAsyncThunk(
  'data/fetchReviews',
  async (id: number) => {
    try {
      const {data} = await api.get<Review>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadCurrentOfferComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteOffers  = createAsyncThunk(
  'data/favorite',
  async () => {
    try {
      const { data } = await api.get<Offers>(APIRoute.Favorite);
      store.dispatch(loadFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
      saveUserEmail(data.email);
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const toggleFavoriteAction = createAsyncThunk(
  'data/toggleFavorite',
  async ({ id, flag }: FavoriteFlagType) => {
    try {
      await api.post<Offers>(`${APIRoute.Favorite}/${id}/${flag}`);
      store.dispatch(fetchFavoriteOffers());
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSendReview = createAsyncThunk(
  'data/fetchSendReviews',
  async ({id, comment, rating}: ReviewSend) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      store.dispatch(setNewReview(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
