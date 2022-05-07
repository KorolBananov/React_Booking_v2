import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import ReviewForm from './ReviewForm';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ReviewForm', () => {

  it('should render correctly', () => {

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <ReviewForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByLabelText('Your review')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Submit');

    userEvent.type(screen.getByTestId('review'), 'test');

    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
