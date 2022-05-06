import {store} from '../store';
import {AuthorizationStatus} from "../consts";
import {Offer} from "./offer";
import {Review} from "./review";

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserData = {
  authorizationStatus: AuthorizationStatus;
}

export type UsingData = {
  city: string;
}

export type AppData = {
  offers: Offer[];
  isDataLoaded: boolean;
  favoriteOffers: Offer[];
  currentOffer: Offer | null,
  reviews: Review[];
  nearbyOffers: Offer[];
}
