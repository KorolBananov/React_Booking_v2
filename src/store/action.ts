import {SortTypes} from '../consts';
import {createAction} from '@reduxjs/toolkit';
import {City, Offers} from '../mocks/offer';

export const changeCity = createAction('changeCity', (value: City) => ({
  payload: value,
}));

export const fillOffersList = createAction('fillOfferList', (value: Offers) => ({
  payload: value,
}));

export const changeSortType = createAction('changeSortType', (value: SortTypes) => ({
  payload: value,
}));


