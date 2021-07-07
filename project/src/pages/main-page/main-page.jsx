import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import OffersList from '../../components/offers-list/offers-list';
import offerListItemProp from '../../components/offer-list-item/offer-list-item.prop';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';
import LocationsSortingForm from '../../components/locations-sorting-form/locations-sorting-form';
import {LOCATIONS} from '../../const';
import { connect } from 'react-redux';
import { OfferTypeSettings, OfferImageSettings } from '../../const';

// eslint-disable-next-line react/prop-types
function MainPage({ offers, city, activeSortType }) {
  const [activeOfferId, setActiveOfferId] = useState(1);
  return (
    <div className="page page--gray page--main">
      <div className="header__left">
        <Header/>
      </div>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
              <LocationsSortingForm />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers = {offers} activeSortType={activeSortType} setActiveOfferId={setActiveOfferId} offerImageSettings={OfferImageSettings.MAIN} type={OfferTypeSettings.MAIN}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} city={LOCATIONS.find(({ name }) => name === city)} activeOfferId={activeOfferId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(
    offerListItemProp,
  ),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const city = state.city;
  const offers = state.offers.filter((offer) => offer.city.name === city);
  return {
    offers: offers,
    city: city,
    activeSortType: state.activeSortType,
  };
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
