import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { APIRoute, AuthorizationStatus } from '../consts';
import { loadOffers, loadFavoriteOffers, requireAuthorization, redirectToRoute, setReviews } from './action';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import { AuthData } from '../types/authData';
import { UserData } from '../types/userData';
import { NewReviewData } from '../types/newReviewData';
import {saveToken, removeToken} from '../services/token';
import {saveUserEmail, removeUserEmail} from '../services/userEmail';
import {saveUserAvatarUrl, removeUserAvatarUrl} from '../services/userAvatar';
import { AppRoute } from '../consts';
import { errorHandler } from '../services/errorHandler';

export const fetchOffersAction = createAsyncThunk(
  'fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandler(error);
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'fetchFavoriteOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);
      store.dispatch(loadFavoriteOffers(data));
    } catch (error) {
      errorHandler(error);
    }
  },
);

export const checkAuthStatusAction = createAsyncThunk(
  'checkAuthStatus',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      saveUserEmail(data.email);
      saveUserAvatarUrl(data.avatarUrl);
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandler(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      removeToken();
      removeUserEmail();
      removeUserAvatarUrl();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandler(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'fetchReviews',
  async (offerId : string | undefined) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
      store.dispatch(setReviews(data));
    } catch (error) {
      errorHandler(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  'addReview',
  async ({comment, rating, offerId}: NewReviewData) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}/${offerId}`, {comment, rating});
      store.dispatch(setReviews(data));
    } catch (error) {
      errorHandler(error);
    }
  },
);
