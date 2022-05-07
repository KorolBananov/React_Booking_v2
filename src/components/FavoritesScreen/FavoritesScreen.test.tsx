import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockOffer} from '../../testMocks';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import FavoritesScreen from './FavoritesScreen';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const history = createMemoryHistory();
const offers = [mockOffer];

describe('Component: FavoritesScreen', () => {
  beforeEach(() => {
    history.push(AppRoute.Favorites);
  });

  it('should render correctly', () => {

    render(
      <Provider store={mockStore({
        DATA: {favoriteOffers: offers},
        USER: {authorizationStatus: AuthorizationStatus.Unknown},
      })}
      >
        <HistoryRouter history={history}>
          <FavoritesScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });

  it('should render FavoritesEmpty Screen when offers array is empty', () => {
    render(
      <Provider store={mockStore({
        DATA: {favoriteOffers: []},
        USER: {authorizationStatus: AuthorizationStatus.Unknown},
      })}
      >
        <HistoryRouter history={history}>
          <FavoritesScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.queryByText('Saved listing')).not.toBeInTheDocument();
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
