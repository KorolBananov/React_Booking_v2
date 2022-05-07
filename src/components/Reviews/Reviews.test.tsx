import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {mockReview} from '../../testMocks';
import {render, screen} from '@testing-library/react';
import {AuthorizationStatus} from '../../consts';
import {Provider} from 'react-redux';
import Reviews from './Reviews';
import HistoryRouter from '../HistoryRouter/HistoryRouter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const history = createMemoryHistory();
const reviews = [mockReview];

describe('Component: Reviews', () => {

  it('should render correctly', () => {

    render(
      <Provider store={mockStore({
        USER: { authorizationStatus: AuthorizationStatus.Auth },
        DATA: { reviews: reviews },
      })}
      >
        <HistoryRouter history={history}>
          <Reviews />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });
});
