import {State} from '../../types/state';
import {NameSpace} from '../../consts';

export const getCity = (state: State): string => state[NameSpace.Using].city;
