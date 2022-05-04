import {CityName, OfferType} from '../consts';
import {Review} from './review';

export type Host = {
  avatarUrl: string,
  id: number,
  name: string,
  isPro: boolean,
}

export type City ={
  name: CityName,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
}

export type Offer ={
  id: number,
  location: {
    latitude:number,
    longitude:number,
    zoom: number,
  },
  city: City,
  previewImage: string,
  images: Array<string>
  isPremium: boolean,
  price: number,
  title: string,
  description: string,
  type: OfferType,
  isFavorite: boolean,
  rating: number
  bedrooms: number,
  maxAdults: number
  goods: Array<string>,
  host: Host,
  reviews: Review[],
};
export type Offers = Offer[];
