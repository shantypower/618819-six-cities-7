import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import {Routes} from '../../const';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import reviewListItemProp from '../rewiew-list-item/review-list-item.prop';
import {createBrowserHistory} from 'history';


function App(props) {
  const {offers, reviews} = props;

  return (
    <Router history = {createBrowserHistory()}>
      <Switch>
        <Route exact path={Routes.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesPage offers = {offers}/>
        </Route>
        <Route exact path={Routes.ROOT}>
          <MainPage offers = {offers} />
        </Route>
        <Route exact path={Routes.OFFER} render={()=> <OfferPage reviews={reviews} offers={offers}/>}/>
        <Route >
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
  reviews: PropTypes.arrayOf(
    PropTypes.shape(reviewListItemProp).isRequired,
  ),
};

export default App;
