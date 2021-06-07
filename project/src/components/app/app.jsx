import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoginPage from '../login-page/login-page';
import Favorites from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import {AppRoute} from '../../const';


function App(props) {
  const {offersQuantity, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offersQuantity = {offersQuantity} offers = {offers}/>
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <OfferPage/>
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
  offers: PropTypes.array.isRequired,
};

export default App;
