import {State} from '../types/state';
import {SortTypes} from '../consts';
import {sortPriceToHigh, sortPriceToLow, sortRatingToHigh} from '../utils';

const getOffersForCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.currentCity.name);

const getSortedOffers = (state:State) => {
  switch (state.currentSortType) {
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

export {getOffersForCity, getSortedOffers};
