import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import FavoriteCity from '../../components/favorite-city/favorite-city';
import {LogoSettings}  from '../../const';
import {getFavoriteOffers, getFavoriteOffersLoadingStatus} from '../../store/data/selectors';
import {fetchFavoriteOffers} from '../../store/api-actions';
import MainEmpty from '../main-empty/main-empty';
import Spinner from '../../components/spinner/spinner';

function FavoritesPage() {

  const offers = useSelector(getFavoriteOffers);
  const areFavoriteOffersLoaded = useSelector(getFavoriteOffersLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  if (!areFavoriteOffersLoaded) {
    return <Spinner/>;
  }

  if (!offers.length) {
    return <MainEmpty/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCity offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo logoSettings={LogoSettings.FOOTER}/>
      </footer>
    </div>
  );
}

export default FavoritesPage;
