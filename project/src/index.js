import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
//import {createStore, applyMiddleware} from 'redux';
import {Router as BrowserRouter} from 'react-router-dom';
////import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
//import {composeWithDevTools} from 'redux-devtools-extension';
//import {reducer} from './store/reducer';
import rootReducer from './store/root-reducer';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, getOffers} from './store/api-actions';
import {createBrowserHistory} from 'history';
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

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
