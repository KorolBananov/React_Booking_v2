import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockCityName, mockOffer} from '../../testMocks';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import PlacesContainer from './PlacesContainer';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const offers = [mockOffer];

describe('Component: PlacesContainer', () => {
  it('should render correctly', () => {

    const currentCity = mockCityName;

    render(
      <Provider store={mockStore({
        APP_USING: {city: currentCity},
        USER: { authorizationStatus: AuthorizationStatus.Unknown },
        DATA: {offers: offers}})}
      >
        <HistoryRouter history={history}>
          <PlacesContainer filteredOffers={offers}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/to stay in/i)).toHaveTextContent(currentCity);
  });
});
