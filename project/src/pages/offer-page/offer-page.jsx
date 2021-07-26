import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewListItem from '../../components/review-list-item/review-list-item';
import GoodsList from '../../components/goods-list/goods-list';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import AddToFavoritesButton from '../../components/add-to-favorites-button/add-to-favorites-button';
import {OfferTypeSettings, OfferImageSettings, AuthorizationStatus, MAX_ROOMS_PER_PAGE, ButtonTypes} from '../../const';
import {useParams} from 'react-router-dom';
import {getReviews, getOffer, getNearby} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getAreLoadedOffersNearbyStatus, getCurrentOffer, getIsOfferLoadedStatus, getOffersNearby, getReviewsSliced} from '../../store/data/selectors';

function OfferPage() {
  const {id} = useParams();
  const currentOffer = useSelector(getCurrentOffer);
  const isOfferLoaded = useSelector(getIsOfferLoadedStatus);
  const offersNearby = useSelector(getOffersNearby);
  const areLoadedOffersNearby = useSelector(getAreLoadedOffersNearbyStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const reviews = useSelector(getReviewsSliced).slice().sort((firstComment, secondComment) => new Date(secondComment.date) - new Date(firstComment.date));

  //const [activeOfferId, setActiveOfferId] = useState(id);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffer(id));
    dispatch(getReviews(id));
    dispatch(getNearby(id));
  }, [id, dispatch]);

  if (!isOfferLoaded || !areLoadedOffersNearby) {
    return (
      <Spinner />
    );
  }

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
                <AddToFavoritesButton offerId={+id} isFavorite={currentOffer.isFavorite} buttonType={ButtonTypes.LIST_ITEM_DETAIL}/>
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
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <CommentForm offerId={id}/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={[...offersNearby, currentOffer]} city={currentOffer.city} activeOfferId={+id}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers = {offersNearby.slice().splice(0, MAX_ROOMS_PER_PAGE)} offerImageSettings={OfferImageSettings.FAVORITES} type={OfferTypeSettings.NEARBY}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
