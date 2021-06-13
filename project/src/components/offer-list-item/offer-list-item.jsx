import React from 'react';
import {Link} from 'react-router-dom';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import {Routes} from '../../const';
import PropTypes from 'prop-types';


function OfferListItem(props) {

  const {offer, history} = props;
  const { isPremium, previewImage, price, title, type, isFavorite, rating, id } = offer;

  function handleClick(evt){
    evt.preventDefault();
    history.push(`${Routes.OFFER}:${id}?`);
  }

  return (
    <article className='cities__place-card place-card'>
      {isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`${Routes.OFFER}:${id}?`}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt='Place view'/>
        </Link>
      </div>
      <div className='place-card__info'>
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
          <Link to='/#' onClick = {handleClick}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

OfferListItem.propTypes = {
  offer: offerListItemProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default OfferListItem;
