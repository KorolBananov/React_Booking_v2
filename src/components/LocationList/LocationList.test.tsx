import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {mockCityName} from '../../testMocks';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import LocationList from './LocationList';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: LocationList', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore({APP_USING: {city: mockCityName}})}>
        <HistoryRouter history={history}>
          <LocationList />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('tabs-list')).toBeInTheDocument();
  });
});
