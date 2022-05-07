import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {Provider} from 'react-redux';
import Header from './Header';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore({USER: {authorizationStatus: AuthorizationStatus.Unknown}})}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('logo-link')).toBeInTheDocument();
  });

  it('should redirect to root when user clicked to Logo', () => {
    history.push('/fake');

    render (
      <Provider store={mockStore({USER: {authorizationStatus: AuthorizationStatus.Unknown}})}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path='*'
              element={<Header />}
            />
            <Route
              path={AppRoute.Root}
              element={<h1>Main Screen</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('logo-link'));
    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
