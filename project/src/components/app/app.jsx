import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.jsx';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import {Routes} from '../../const';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
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
    <Switch>
      <Route exact path={Routes.LOGIN} render={() =><LoginPage/>}/>
      <PrivateRoute exact  path={Routes.FAVORITES}  render={() => <FavoritesPage offers = {offers}/>}/>
      <Route exact path={Routes.ROOT} render={() => <MainPage offers = {offers} />}/>
      <Route exact path={Routes.OFFER} render={() => <OfferPage offers={offers}/>}/>
      <Route render={() => <NotFoundPage />}/>
    </Switch>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerListItemProp).isRequired,
  ),
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
