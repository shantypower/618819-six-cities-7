import React from 'react';
import OfferListItem from '../offer-list-item/offer-list-item';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';

function OffersList(props) {
  const { offers } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferListItem
          key={offer.id}
          offer={{
            price: offer.price,
            type: offer.type,
            title: offer.title,
            previewImage: offer.preview_image,
            isPremium: offer.isPremium,
            rating: offer.rating,
          }}
        />
      ))}
    </div>

  );
}

OffersList.propTypes = {
  offers: offerListItemProp.isRequired,
};

export default OffersList;
