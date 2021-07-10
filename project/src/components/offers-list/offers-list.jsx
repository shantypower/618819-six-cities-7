import React from 'react';
import PropTypes from 'prop-types';
import OfferListItem from '../offer-list-item/offer-list-item';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import { connect } from 'react-redux';
import {ActionCreator} from '../../store/action';

function OffersList(props) {
  const { offers, type, offerImageSettings, city, setCity, setActiveOfferId = () => {}} = props;

  const handleClick = (evt) => {
    const {textContent} = evt.target;
    if (city === textContent) {
      return;
    }
    setCity(textContent);
  };

  return (
    <>
      {offers.map((offer) => (
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
        />
      ))}
    </>

  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    offerListItemProp.isRequired,
  ),
  type: PropTypes.shape({
    articleClass: PropTypes.string,
    imageContainerClass: PropTypes.string,
    infoContainerClass: PropTypes.string,
  }),
  offerImageSettings: PropTypes.object.isRequired,
  setActiveOfferId: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

const mapStateToProps = ({ city }) => ({
  city: city,
});

export {OffersList};

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
