import {UserData} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../consts';
import {createSlice} from '@reduxjs/toolkit';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const {requireAuthorization} = userData.actions;
