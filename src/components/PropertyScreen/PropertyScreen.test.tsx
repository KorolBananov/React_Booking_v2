import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockOffer, mockReview} from '../../testMocks';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import PropertyScreen from './PropertyScreen';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const history = createMemoryHistory();
const offer = mockOffer;
const nearbyOffers = [mockOffer];
const reviews = [mockReview];
const offers = [mockOffer];

describe('Component: PropertyScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({
        DATA: {offers: offers, currentOffer: offer, nearbyOffers: nearbyOffers, reviews: reviews},
        USER: {authorizationStatus: AuthorizationStatus.Unknown},
      })}
      >
        <HistoryRouter history={history}>
          <PropertyScreen />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('property-page')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });
});
