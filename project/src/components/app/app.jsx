import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.jsx';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import {Routes} from '../../const';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/spinner';
import {isCheckedAuth} from '../../utils/common';
import { getIsDataLoadedStatus } from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App() {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getIsDataLoadedStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <Switch>
      <Route exact path={Routes.LOGIN} render={() =><LoginPage/>}/>
      <PrivateRoute exact  path={Routes.FAVORITES}  render={() => <FavoritesPage/>}/>
      <Route exact path={Routes.ROOT} render={() => <MainPage/>}/>
      <Route exact path={Routes.OFFER} render={() => <OfferPage/>}/>
      <Route render={() => <NotFoundPage />}/>
    </Switch>
  );
}

export default App;
