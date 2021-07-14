/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import PropTypes, {string} from 'prop-types';
import Header from '../../components/header/header';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewListItem from '../../components/rewiew-list-item/review-list-item';
import GoodsList from '../../components/goods-list/goods-list';
import OffersList from '../../components/offers-list/offers-list';
//import offerListItemProp from '../../components/offer-list-item/offer-list-item.prop';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
// eslint-disable-next-line no-unused-vars
import { OfferTypeSettings, OfferImageSettings, ListSettings, AuthorizationStatus} from '../../const';
import { useParams} from 'react-router-dom';
import {getReviews, getOffer, getNearby} from '../../store/api-actions';
import {connect} from 'react-redux';
//import { useHistory } from 'react-router-dom';

function OfferPage({isExist, offersNearby, currentOffer, reviews, authorizationStatus, onLoad, isOfferLoaded, areLoadedOffersNearby, activeSortType}) {
  //const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    onLoad(id);
  }, [id, onLoad]);


  if (!isOfferLoaded || !areLoadedOffersNearby) {
    return (
      <Spinner />
    );
  }

  /* if (!isExist) {
    history.push(Routes.NOT_FOUND);
  } */

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.map((image, k) => (
                <div key={`${k + image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="studio view"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={`property__bookmark-button button ${currentOffer.isFavorite && 'property__bookmark-button--active'}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width : currentOffer.rating*100/5}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <GoodsList goods={currentOffer.goods}/>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${currentOffer.host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && (
                    <span className="property__user-status">
                  Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <ReviewListItem
                      key={review.id}
                      id={id}
                      review={{
                        comment: review.comment,
                        date: review.date,
                        avatarUrl: review.user.avatarUrl,
                        title: review.title,
                        previewImage: review.preview_image,
                        isPremium: review.isPremium,
                        rating: review.rating,
                        name: review.user.name,
                      }}
                    />
                  ))}
                </ul>
                <CommentForm offerId={id}/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={[...offersNearby, currentOffer]} city={currentOffer.city}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers = {offersNearby} activeSortType={activeSortType} offerImageSettings={OfferImageSettings} type={OfferTypeSettings.NEARBY}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  //offers: offerListItemProp,
  images: PropTypes.arrayOf(string),
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews.slice().splice(0, ListSettings.offersQuantity),
  offersNearby: state.offersNearby,
  currentOffer: state.currentOffer,
  areReviewsLoaded: state.areReviewsLoaded,
  isOfferLoaded: state.isOfferLoaded,
  areLoadedOffersNearby: state.areLoadedOffersNearby,
  activeSortType: state.activeSortType,
  isExist: state.isExist,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(getOffer(id));
    dispatch(getReviews(id));
    dispatch(getNearby(id));
  },
});

export {OfferPage};
export default connect(mapStateToProps,  mapDispatchToProps)(OfferPage);
