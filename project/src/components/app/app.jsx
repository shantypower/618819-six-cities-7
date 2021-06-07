import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App(props) {
  const {offersCount, offers} = props;

  return <MainPage offersCount = {offersCount} offers = {offers}/>;
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
