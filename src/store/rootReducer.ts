import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {userData} from './userData/userData';
import {usingData} from './usingData/usingData';
import {appData} from './appData/appData';

export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Data]: appData.reducer,
  [NameSpace.Using]: usingData.reducer,
});
