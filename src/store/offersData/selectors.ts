import {NameSpace, SortTypes} from '../../consts';
import {State} from '../../types/state';
import {City, Offer, Offers} from '../../types/offer';
import {Favorite} from '../../types/favorite';
import {Review} from '../../types/review';
import {sortPriceToHigh, sortPriceToLow, sortRatingToHigh} from '../../utils';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.data].currentOffer;
export const getCurrentOffersNearby = (state: State): Offer[] => state[NameSpace.data].currentOffersNearby;
export const getCurrentOfferComments = (state: State): Review[] => state[NameSpace.data].currentOfferComments;
export const getFavoriteOffers = (state: State): Favorite[] => state[NameSpace.data].favoriteOffers;
export const getCurrentSortType = (state: State): string => state[NameSpace.data].currentSortType;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getCurrentCity = (state: State): City => state[NameSpace.data].currentCity;

export const getOffersForCity = (state:State) => state[NameSpace.data].offers.filter((offer) => offer.city.name === state[NameSpace.data].currentCity.name);

export const getSortedOffers = (state: State) => {
  switch (state[NameSpace.data].currentSortType) {
    case SortTypes.PriceLowToHigh:
      return getOffersForCity(state).sort(sortPriceToHigh);
    case SortTypes.PriceHighToLow:
      return getOffersForCity(state).sort(sortPriceToLow);
    case SortTypes.RatingLowToHigh:
      return getOffersForCity(state).sort(sortRatingToHigh);
    default:
      return getOffersForCity(state);
  }
};
