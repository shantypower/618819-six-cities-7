import React from 'react';
import PropTypes from 'prop-types';
import OfferListItem from '../offer-list-item/offer-list-item';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';

function OffersList(props) {
  const { offers, type} = props;


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferListItem
          key={offer.id}
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
          type={type}
        />
      ))}
    </div>

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
};

export default OffersList;
