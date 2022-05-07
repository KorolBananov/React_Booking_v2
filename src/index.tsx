import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App/App';
import {store} from './store';
import HistoryRouter from './components/HistoryRouter/HistoryRouter';
import browserHistory from './browserHistory';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
