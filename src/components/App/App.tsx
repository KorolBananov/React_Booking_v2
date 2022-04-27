import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import Favorites from '../Favorites/Favorites';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {Offers} from '../../mocks/offer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';
import Room from '../Room/Room';
import NotFound from '../NotFound/NotFound';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element={<Main offers={offers} />}
        />
        <Route
          path={ AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Room offer ={offers[0]} />}
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
