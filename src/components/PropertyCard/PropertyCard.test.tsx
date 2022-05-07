import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockOffer} from '../../testMocks';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {AppRoute, AuthorizationStatus, propertyCardClasses} from '../../consts';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import PropertyCard from './PropertyCard';
import {Route, Routes} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const offer = mockOffer;

describe('Component: PropertyCard', () => {

  it('should render correctly', () => {

    render(
      <Provider store={mockStore({ USER: { authorizationStatus: AuthorizationStatus.Unknown } })}>
        <HistoryRouter history={history}>
          <PropertyCard
            className={propertyCardClasses.mainPage}
            onActiveChoose={() => null}
            id={offer.id}
            offer={offer}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('place-card')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button');
    expect(screen.getByTestId('title-link')).toBeInTheDocument();
  });

  it('should redirect when user clicked image of property', () => {
    render(
      <Provider store={mockStore({ USER: { authorizationStatus: AuthorizationStatus.Unknown } })}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path='*'
              element={
                <PropertyCard className={propertyCardClasses.mainPage}
                              onActiveChoose={() => null}
                              id={offer.id}
                              offer={offer}
                />
              }
            />
            <Route
              path={AppRoute.Property}
              element={<h1>Property Screen</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('img-link'));

    expect(screen.getByText('Property Screen')).toBeInTheDocument();
  });
});
