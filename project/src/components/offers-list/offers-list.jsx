import React from 'react';
import PropTypes from 'prop-types';
import OfferListItem from '../offer-list-item/offer-list-item';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import {useDispatch, useSelector} from 'react-redux';
import {getSortedOffers} from '../../utils/common';
import {setCity} from '../../store/action';
import {getCity} from '../../store/ui/selectors';

function OffersList(props) {
  const { offers, type, offerImageSettings, authorizationStatus, activeSortType, setActiveOfferId = () => {}} = props;

  const dispatch = useDispatch();
  const city = useSelector(getCity);

  const handleClick = (evt) => {
    const {textContent} = evt.target;
    if (city === textContent) {
      return;
    }
    dispatch(setCity(city));
  };

  return (
    <>
      {getSortedOffers(offers, activeSortType).map((offer) => (
        <OfferListItem
          key={offer.id}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
          name={offer.name}
          offer={offer}
          isActive={offer.name === city}
          idLink={offer.id}
          type={type}
          offerImageSettings={offerImageSettings}
          onClick={handleClick}
          setActiveOfferId={setActiveOfferId}
          authorizationStatus={authorizationStatus}
        />
      ))}
    </>

  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    offerListItemProp,
  ),
  type: PropTypes.shape({
    articleClass: PropTypes.string,
    imageContainerClass: PropTypes.string,
    infoContainerClass: PropTypes.string,
  }),
  offerImageSettings: PropTypes.object.isRequired,
  setActiveOfferId: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

export default OffersList;
