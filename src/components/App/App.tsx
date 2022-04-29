import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import Favorites from '../Favorites/Favorites';
import {AppRoute, AuthorizationStatus} from '../../consts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';
import Room from '../Room/Room';
import NotFound from '../NotFound/NotFound';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={ AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
