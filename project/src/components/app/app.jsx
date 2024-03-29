import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.jsx';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/spinner';
import { getIsDataLoadedStatus } from '../../store/data/selectors';

function App() {

  const isDataLoaded = useSelector(getIsDataLoadedStatus);

  if (!isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.LOGIN}>
        <PrivateRoute exact allowedStatus={AuthorizationStatus.NO_AUTH} path={AppRoute.LOGIN} redirect={AppRoute.ROOT} render={() => <LoginPage/>}/>
      </Route>
      <PrivateRoute exact path={AppRoute.FAVORITES} allowedStatus={AuthorizationStatus.AUTH} redirect={AppRoute.LOGIN} render={() => <FavoritesPage/>}/>
      <Route exact path={AppRoute.ROOT} render={() => <MainPage/>}/>
      <Route exact path={AppRoute.OFFER} render={() => <OfferPage/>}/>
      <Route render={() => <NotFoundPage />}/>
    </Switch>
  );
}

export default App;
