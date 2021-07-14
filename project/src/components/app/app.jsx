import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.jsx';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import {Routes} from '../../const';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
//import reviewListItemProp from '../rewiew-list-item/review-list-item.prop';
import {createBrowserHistory} from 'history';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';
import {isCheckedAuth} from '../../utils/common';


function App(props) {
  // eslint-disable-next-line react/prop-types
  const {offers, authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <Router history = {createBrowserHistory()}>
      <Switch>
        <Route exact path={Routes.LOGIN}>
          <LoginPage/>
        </Route>
        <PrivateRoute exact path={Routes.FAVORITES}>
          <FavoritesPage offers = {offers}/>
        </PrivateRoute>
        <Route exact path={Routes.ROOT}>
          <MainPage offers = {offers} />
        </Route>
        <Route exact path={Routes.OFFER}>
          <OfferPage offers={offers}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerListItemProp).isRequired,
  ),
  /*   reviews: PropTypes.arrayOf(
    PropTypes.shape(reviewListItemProp).isRequired,
  ), */
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps)(App);
