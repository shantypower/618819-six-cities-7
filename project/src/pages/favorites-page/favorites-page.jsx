import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Logo from '../../components/logo/logo';
import { OfferImageSettings, OfferTypeSettings } from '../../const';
import { LogoSettings } from '../../const';
import {getOffers} from '../../store/data/selectors';

function FavoritesPage() {

  const offers = useSelector(getOffers);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList offers = {offers} offerImageSettings={OfferImageSettings.FAVORITES} type={OfferTypeSettings.FAVORITES}/>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList offers = {offers} offerImageSettings={OfferImageSettings.FAVORITES} type={OfferTypeSettings.FAVORITES}/>
                </div>
              </li>
            </ul>
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
