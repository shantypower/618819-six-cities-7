import React from 'react';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import {LogoTypes}  from '../../const';

function FavoritesEmpty() {

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo logoType={LogoTypes.FOOTER}/>
      </footer>
    </div>
  );
}

export default FavoritesEmpty;
