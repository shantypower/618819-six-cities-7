import React from 'react';
import PropTypes from 'prop-types';
import OfferListItem from '../offer-list-item/offer-list-item';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import { connect } from 'react-redux';
import {ActionCreator} from '../../store/action';

function OffersList(props) {
  // eslint-disable-next-line react/prop-types
  const { currentOffers, type, offerImageSettings, city, setCity} = props;

  const handleClick = (evt) => {
    const {textContent} = evt.target;
    if (city === textContent) {
      return;
    }
    setCity(textContent);
  };

  return (
    <>
      {currentOffers.map((offer) => (
        <OfferListItem
          key={offer.id}
          name={offer.name}
          offer={{
            id: offer.id,
            price: offer.price,
            type: offer.type,
            title: offer.title,
            previewImage: offer.preview_image,
            isPremium: offer.isPremium,
            rating: offer.rating,
            isFavorite: offer.isFavorite,
          }}
<<<<<<< HEAD
          isActive={offer.name === city}
          idLink={offer.id}
=======
>>>>>>> master
          type={type}
          offerImageSettings={offerImageSettings}
          onClick={handleClick}
        />
      ))}
    </>

  );
}

OffersList.propTypes = {
  currentOffers: PropTypes.arrayOf(
    offerListItemProp.isRequired,
  ),
  type: PropTypes.shape({
    articleClass: PropTypes.string,
    imageContainerClass: PropTypes.string,
    infoContainerClass: PropTypes.string,
  }),
  offerImageSettings: PropTypes.object.isRequired,
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
