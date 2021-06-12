import React from 'react';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';


function OfferListItem(props) {

  const {offer} = props;

  const rating = function (star) {
    let rateStar = '';
    switch (star) {
      case 1:
        rateStar = '20%';
        break;
      case 2:
        rateStar = '40%';
        break;
      case 3:
        rateStar = '60%';
        break;
      case 4:
        rateStar = '80%';
        break;
      case 5:
        rateStar = '100%';
        break;
      default:
        rateStar = '0%';
        break;
    }
    return rateStar;
  };

  return (
    <article className='cities__place-card place-card'>
      {offer.isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='/#'>
          <img className='place-card__image' src={offer.previewImage} width='260' height='200' alt='Place view'/>
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style = {{width : rating(offer.rating)}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='/#'>{offer.title}</a>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}

OfferListItem.propTypes = {
  offer: offerListItemProp.isRequired,
};

export default OfferListItem;
