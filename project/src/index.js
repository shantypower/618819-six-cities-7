import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const SETTINGS = {
  offersQuantity: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App offers = {offers} reviews = {reviews} offersQuantity = {SETTINGS.offersQuantity}/>
  </React.StrictMode>,
  document.getElementById('root'));
