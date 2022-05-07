import {requireAuthorization, userData} from './userData';
import {AuthorizationStatus} from '../../consts';

describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userData.reducer(void 0, {type: 'UNKNOWN ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth};

    expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth};

    expect(userData.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
  });
});
