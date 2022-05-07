import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockCityName, mockOffer} from '../../testMocks';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import Map from './Map';
import {MapClasses} from '../../consts';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const offer = mockOffer;
const offers = [offer];

describe('Component: Map', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore({
        DATA: {offers: offers},
      })}
      >
        <HistoryRouter history={history}>
          <Map
            className={MapClasses.MainPage}
            city={mockCityName}
            points={offers}
            activeOffer={offer}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
