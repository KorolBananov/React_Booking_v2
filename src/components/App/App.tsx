import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import Favorites from '../Favorites/Favorites';
import {AppRoute, AuthorizationStatus} from '../../consts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';
import Room from '../Room/Room';
import NotFound from '../NotFound/NotFound';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/userProcess/selectors';
import {getLoadedDataStatus} from '../../store/offersData/selectors';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Room />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
