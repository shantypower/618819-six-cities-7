import React from 'react';
import {Link} from 'react-router-dom';
import offerListItemProp from '../offer-list-item/offer-list-item.prop';
import PropTypes from 'prop-types';
import {ButtonType} from '../../const';
import FavoritesButton from '../../components/add-to-favorites-button/add-to-favorites-button';
import { useSelector } from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';

function OfferListItem(props) {

  const {offer, type, OfferImageSetting, onMouseEnter, onMouseLeave} = props;
  const { isPremium, previewImage, price, title, isFavorite, rating, id } = offer;

  const authorizationStatus = useSelector(getAuthorizationStatus);

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
          <img className='place-card__image' src={previewImage} width={OfferImageSetting.width} height={OfferImageSetting.height} alt='Place view'/>
        </Link>
      </div>
      <div className={type.infoContainerClass} data-testid = 'offer-info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <FavoritesButton offerId={+id} isFavorite={isFavorite} buttonType={ButtonType.LIST_ITEM} authorizationStatus={authorizationStatus}/>
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
  OfferImageSetting: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

export default OfferListItem;
