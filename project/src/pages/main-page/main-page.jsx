import React, {useState}  from 'react';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';
import LocationsSortingForm from '../../components/locations-sorting-form/locations-sorting-form';
import {LOCATIONS} from '../../const';
import { useSelector } from 'react-redux';
import { OfferTypeSettings, OfferImageSettings } from '../../const';
import { getCity, getActiveSortType } from '../../store/ui/selectors';
import { getCurrentOffers } from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function MainPage() {

  const currentOffers = useSelector(getCurrentOffers);
  const city = useSelector(getCity);
  const activeSortType = useSelector(getActiveSortType);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const [activeOfferId, setActiveOfferId] = useState(1);
  return (
    <div className="page page--gray page--main">
      <div className="header__left container">
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
              <b className="places__found">{`${currentOffers.length} places to stay in ${city}`}</b>
              <LocationsSortingForm activeSortType={activeSortType} />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers = {currentOffers} activeSortType={activeSortType} setActiveOfferId={setActiveOfferId} offerImageSettings={OfferImageSettings.MAIN} type={OfferTypeSettings.MAIN} authorizationStatus={authorizationStatus}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={currentOffers} city={LOCATIONS.find(({ name }) => name === city)} activeOfferId={activeOfferId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
