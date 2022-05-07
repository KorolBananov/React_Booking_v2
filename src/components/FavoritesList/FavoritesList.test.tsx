import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockOffer} from '../../testMocks';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import FavoritesList from './FavoritesList';
import {AppRoute, CITIES} from '../../consts';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const offers = [mockOffer];

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <FavoritesList favoriteOffers={offers} cities={CITIES}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('city-link')).toBeInTheDocument();
  });

  it('should redirect to root when user clicked city name', () => {
    history.push('/fake');
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path='*'
              element={<FavoritesList favoriteOffers={offers} cities={CITIES} />}
            />
            <Route
              path={AppRoute.Root}
              element={<h1>Main Screen</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('city-link'));
    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
