import {mockCityName, mockOffer} from '../testMocks';
import {renderHook} from '@testing-library/react-hooks';
import useMap from './useMap';

const offers = [mockOffer];

describe('Hook: useMap', () => {
  it('should return Map', () => {
    const target = document.createElement('div')
    const {result} = renderHook(() =>
      useMap({current: target}, mockCityName, offers),
    );

    const map = result.current;

    expect(map).toBeInstanceOf(Map);
  });
});
