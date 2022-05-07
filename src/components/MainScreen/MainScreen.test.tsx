import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockCityName, mockOffer} from '../../testMocks';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import MainScreen from './MainScreen';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const offers = [mockOffer];

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({
        DATA: {offers: offers},
        USING_DATA: {city: mockCityName},
        USER: {authorizationStatus: AuthorizationStatus.Unknown},
      })}
      >
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
