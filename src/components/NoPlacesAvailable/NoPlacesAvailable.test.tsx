import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockCityName} from '../../testMocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import NoPlacesAvailable from './NoPlacesAvailable';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: NoPlacesAvailable', () => {
  it('should render correctly', () => {

    const currentCity = mockCityName;

    render(
      <Provider store={mockStore({APP_USING: {city: currentCity}})}>
        <HistoryRouter history={history}>
          <NoPlacesAvailable />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(/We could not find/i)).toHaveTextContent(currentCity);
  });
});
