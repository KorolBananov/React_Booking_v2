import {store} from '../store';
import {AuthorizationStatus} from '../consts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
}

export type State = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;
