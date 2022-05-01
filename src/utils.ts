import {Offer} from './types/offer';
import {MAX_REVIEWS_COUNT} from './consts';
import {Review} from './types/review';

export const sortPriceToHigh = (prev: Offer, next: Offer) => prev.price - next.price;
export const sortPriceToLow = (prev: Offer, next: Offer) => next.price - prev.price;
export const sortRatingToHigh = (prev: Offer, next: Offer) => next.rating - prev.rating;

const PERCENT = 100;
const MAX_RATING = 5;

export const ratingWidth = (rating: number): number => Math.round(rating / MAX_RATING * PERCENT);

export const lengthOfReviews = (array: Review[]) => {
  if (array.length > 10) {
    return array.slice(0, MAX_REVIEWS_COUNT);
  }
  return array;
};

export const sortReviewsDate = (array: Review[]) => {
  if (array.length < 2) {
    return array;
  }
  const newArray = array.slice();
  return newArray.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));
};
