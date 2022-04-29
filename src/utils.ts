import {Offer} from './mocks/offer';

export const sortPriceToHigh = (prev: Offer, next: Offer) => prev.price - next.price;
export const sortPriceToLow = (prev: Offer, next: Offer) => next.price - prev.price;
export const sortRatingToHigh = (prev: Offer, next: Offer) => next.rating - prev.rating;
