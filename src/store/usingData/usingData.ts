import {UsingData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';

const initialState: UsingData = {
  city: 'Paris',
};

export const usingData = createSlice({
  name: NameSpace.Using,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {changeCity} = usingData.actions;
