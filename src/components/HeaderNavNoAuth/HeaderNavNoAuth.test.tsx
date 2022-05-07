import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import HeaderNavNoAuth from './HeaderNavNoAuth';
import {Route, Routes} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {AppRoute} from '../../consts';

const history = createMemoryHistory();

describe('Component: HeaderNavNoAuth', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <HeaderNavNoAuth />
      </HistoryRouter>,
    );

    const linkElement = screen.getByText('Sign in');

    expect(linkElement).toBeInTheDocument();
  });

  it('should redirect when user clicked "Sign in" link', () => {

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path='*'
            element={<HeaderNavNoAuth />}
          />
          <Route
            path={AppRoute.Login}
            element={<h1>Login Screen</h1>}
          />
        </Routes>
      </HistoryRouter>,
    );

    userEvent.click(screen.getByText('Sign in'));

    expect(screen.getByText('Login Screen')).toBeInTheDocument();

  });
});
