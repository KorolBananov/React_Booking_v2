import {
  appData,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffers,
  setCurrentOffer,
  setReviews,
  updateOffers
} from './appData';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';
import {mockOffer, mockReview} from '../../testMocks';

const mockOffers: Offer[] = [mockOffer];

const mockReviews: Review[] = [mockReview];

const state = {
  offers: [],
  isDataLoaded: false,
  favoriteOffers: [],
  currentOffer: null,
  reviews: [],
  nearbyOffers: [],
};

describe('Reducer: appData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        favoriteOffers: [],
        currentOffer: null,
        reviews: [],
        nearbyOffers: [],
      });
  });

  it('should update offers by load offers', () => {

    expect(appData.reducer(state, loadOffers(mockOffers)))
      .toEqual({
        offers: mockOffers,
        isDataLoaded: true,
        favoriteOffers: [],
        currentOffer: null,
        reviews: [],
        nearbyOffers: [],
      });
  });

  it('should update favorire offers by load favorire offers', () => {
    expect(appData.reducer(state, loadFavoriteOffers(mockOffers)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        favoriteOffers: mockOffers,
        currentOffer: null,
        reviews: [],
        nearbyOffers: [],
      });

    expect(appData.reducer(state, loadFavoriteOffers([])))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        favoriteOffers: [],
        currentOffer: null,
        reviews: [],
        nearbyOffers: [],
      });
  });

  it('should update nearby offers by load nearby offers', () => {
    expect(appData.reducer(state, loadNearbyOffers(mockOffers)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        favoriteOffers: [],
        currentOffer: null,
        reviews: [],
        nearbyOffers: mockOffers,
      });

    expect(appData.reducer(state, loadNearbyOffers([])))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        favoriteOffers: [],
        currentOffer: null,
        reviews: [],
        nearbyOffers: [],
      });
  });

  it('should update current offer by load current offer', () => {
    expect(appData.reducer(state, setCurrentOffer(mockOffer)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        favoriteOffers: [],
        currentOffer: mockOffer,
        reviews: [],
        nearbyOffers: [],
      });
  });

  it('should update reviews offer by load reviews', () => {
    expect(appData.reducer(state, setReviews(mockReviews)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        favoriteOffers: [],
        currentOffer: null,
        reviews: mockReviews,
        nearbyOffers: [],
      });
  });

  it ('should update offers by update offers', () => {
    expect(appData.reducer(state, updateOffers(mockOffer)))
      .toEqual({
        offers: mockOffers,
        isDataLoaded: false,
        favoriteOffers: [],
        currentOffer: null,
        reviews: [],
        nearbyOffers: [],
      });
  });
});
