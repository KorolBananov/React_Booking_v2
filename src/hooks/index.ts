import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AddDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<AddDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
