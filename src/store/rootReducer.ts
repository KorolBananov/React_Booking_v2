import {combineReducers} from 'redux';
import {NameSpace} from '../consts';
import {userProcess} from './userProcess/userProcess';
import {offersData} from './offersData/offersData';

export const rootReducer = combineReducers({
  [NameSpace.data]: offersData.reducer,
  [NameSpace.user]: userProcess.reducer,
});
