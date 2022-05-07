import thunk from "redux-thunk";
import {configureMockStore} from "@jedmao/redux-mock-store";
import {mockCityName, mockOffer, mockReview} from "../../testMocks";
import {AppRoute, AuthorizationStatus} from "../../consts";
import {createMemoryHistory} from "history";
import {Provider} from "react-redux";
import HistoryRouter from "../HistoryRouter/HistoryRouter";
import App from "./App";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const offer = mockOffer;
const offers = [mockOffer];
const nearbyOffers = [mockOffer];
const reviews = [mockReview];

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {isDataLoaded: true, currentOffer: offer, offers: offers, favoriteOffers: offers, nearbyOffers: nearbyOffers, reviews: reviews},
  USING: {city: mockCityName},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main Screen" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('should render "Login Screen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByRole('button')).toHaveClass('login__submit');

    userEvent.type(screen.getByPlaceholderText('Email'), 'test@test.ru');
    userEvent.type(screen.getByPlaceholderText('Password'), '123456');

    expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

  it('should render "Favorite Screen" when user navigate to "/favorite"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });

  it('should render "Property Screen" when user navigate to "/offer/:id"', () => {
    history.push(AppRoute.Property);

    render(fakeApp);

    expect(screen.getByTestId('property-page')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });

  it('should render "Not Found Screen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404 NOT FOUND')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
