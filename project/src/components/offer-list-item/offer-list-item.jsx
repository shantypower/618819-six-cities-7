import React from 'react';
import {Link} from 'react-router-dom';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import PropTypes from 'prop-types';

function OfferListItem(props) {

  const {offer, type, offerImageSettings, onMouseEnter, onMouseLeave} = props;
  const { isPremium, previewImage, price, title, isFavorite, rating, id } = offer;

  return (
    <article
      className={type.articleClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      <div className={type.imageContainerClass}>
        <Link to={`/offer/${id}`}>
          <img className='place-card__image' src={previewImage} width={offerImageSettings.width} height={offerImageSettings.height} alt='Place view'/>
        </Link>
      </div>
      <div className={type.infoContainerClass}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={
            isFavorite
              ? 'place-card__bookmark-button place-card__bookmark-button--active button'
              : 'place-card__bookmark-button button'
          } type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style = {{width : rating*100/5}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}

OfferListItem.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  offer: offerListItemProp,
  type: PropTypes.shape({
    articleClass: PropTypes.string,
    imageContainerClass: PropTypes.string,
    infoContainerClass: PropTypes.string,
  }),
  offerImageSettings: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

export default OfferListItem;
