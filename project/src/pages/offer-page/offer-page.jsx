import React from 'react';
import PropTypes, {string} from 'prop-types';
import Header from '../../components/header/header';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewListItem from '../../components/rewiew-list-item/review-list-item';
import GoodsList from '../../components/goods-list/goods-list';
import OffersList from '../../components/offers-list/offers-list';
import reviewListItemProp from '../../components/rewiew-list-item/review-list-item.prop';
import offerListItemProp from '../../components/offer-list-item/offer-list-item.prop';
import { OfferTypeSettings, OfferImageSettings } from '../../const';

function OfferPage({offers, reviews}) {

  const {isPremium, isFavorite, title, rating, bedrooms, maxAdults, host, description, goods, type, price, images} = offers[0];
  const {isPro} = host;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, id) => (
                <div key={`${id + image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="studio view"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite && 'property__bookmark-button--active'}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width : rating*100/5}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <GoodsList goods={goods}/>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <ReviewListItem
                      key={review.id}
                      review={{
                        comment: review.comment,
                        date: review.date,
                        avatarUrl: review.user.avatarUrl,
                        title: review.title,
                        previewImage: review.preview_image,
                        isPremium: review.isPremium,
                        rating: review.rating,
                      }}
                    />
                  ))}
                </ul>
                <CommentForm/>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers = {offers} offerImageSettings={OfferImageSettings} type={OfferTypeSettings.NEARBY}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  offers: offerListItemProp,
  reviews: PropTypes.arrayOf(
    PropTypes.shape(reviewListItemProp).isRequired,
  ),
  images: PropTypes.arrayOf(string),
};

export default OfferPage;
