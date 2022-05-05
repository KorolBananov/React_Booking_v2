import {Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MainScreen from '../MainScreen/MainScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import PropertyScreen from '../PropertyScreen/PropertyScreen';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {useEffect} from 'react';
import { fetchOffersAction, checkAuthStatusAction } from '../../store/api-actions';
import browserHistory from '../../browserHistory';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import FavoritesScreen from '../FavoritesScreen/FavoritesScreen';

function App(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuthStatusAction());
  }, [dispatch]);

  const {authorizationStatus , isDataLoaded} = useAppSelector((state) => state);

  if ((authorizationStatus === AuthorizationStatus.Unknown) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root}
          element={<MainScreen/>}
        >
        </Route>
        <Route path={AppRoute.Login}
          element={<LoginScreen />}
        >
        </Route>
        <Route path={AppRoute.Property}
          element={<PropertyScreen/>}
        >
        </Route>
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        >
        </Route>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
