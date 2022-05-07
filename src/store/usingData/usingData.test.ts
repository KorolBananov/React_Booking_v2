import {changeCity, usingData} from './usingData';
import {address} from 'faker';

describe('Reducer: usingData', () => {
  it('without additional parameters should return initial state', () => {
    expect(usingData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({city: 'Paris'});
  });

  it('should change current city by a given value', () => {
    const state = {city: 'Paris'};
    const mockCity = address.cityName();

    expect(usingData.reducer(state, changeCity(mockCity)))
      .toEqual({city: mockCity});
  });
});
