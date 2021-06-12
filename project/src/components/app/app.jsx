import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import {Routes} from '../../const';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import reviewListItemProp from '../rewiew-list-item/review-list-item.prop';


function App(props) {
  const {offersQuantity, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesPage offers = {offers}/>
        </Route>
        <Route exact path={Routes.ROOT}>
          <MainPage offersQuantity = {offersQuantity} offers = {offers}/>
        </Route>
        <Route exact path={Routes.OFFER}>
          <OfferPage reviews = {reviews}/>
        </Route>
        <Route >
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offersQuantity: PropTypes.number.isRequired,
  offers: offerListItemProp.isRequired,
  reviews: reviewListItemProp.isRequired,
};

export default App;
