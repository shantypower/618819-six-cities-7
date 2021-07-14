import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Router as BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, getOffers} from './store/api-actions';
import {createBrowserHistory} from 'history';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

const browserHistory = createBrowserHistory();

store.dispatch(checkAuth());
store.dispatch(getOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
