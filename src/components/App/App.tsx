import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Favorites from '../Favorites/Favorites';
import NotFound from '../NotFound/NotFound';
import { AppRoute } from '../../consts';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites/>}
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
