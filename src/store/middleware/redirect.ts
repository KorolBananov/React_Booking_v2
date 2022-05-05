import { Middleware } from 'redux';
import { reducer } from '../reducer';
import browserHistory from '../../browserHistory';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (action.type === 'redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
