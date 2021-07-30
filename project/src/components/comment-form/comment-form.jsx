import React, { useState,  useCallback } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import {OfferPageSetting, ErrorMessage} from '../../const';
//import { getHasPostedComment } from '../../store/ui/selectors';
import ErrorNotification from '../error-notification/error-notification';

function CommentForm({offerId}) {

  const [rating, setRating] = useState(OfferPageSetting.DEFAULT_RATING);
  const [review, setReviewText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFormError, setIsFormError] = useState(false);
  const [isChekingComment, setIsCheckingComment] = useState(false);

  const dispatch = useDispatch();

  const handleFormChange = (evt) => {
    setIsDisabled(!(review.length >= OfferPageSetting.MIN_REVIEW_LENGTH
      && review.length <= OfferPageSetting.MAX_REVIEW_LENGTH
      && rating > OfferPageSetting.DEFAULT_RATING
      && !isChekingComment));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (isDisabled || isChekingComment) {
      return;
    }

    setIsFormError(false);
    setIsCheckingComment(true);
    setIsDisabled(true);
    dispatch(sendComment({id: offerId, comment: review, rating: rating}))
      .then(() => {
        setReviewText('');
        setRating(OfferPageSetting.DEFAULT_RATING);
        setIsDisabled(true);
      })
      .catch((error) => {
        setIsFormError(true);
        setIsCheckingComment(false);
        setIsDisabled(false);
      })
      .finally(() => {
        setRating(OfferPageSetting.DEFAULT_RATING);
        setIsDisabled(false);
        setIsCheckingComment(false);
      });
  };

  const handleTextChange = useCallback((evt) => {
    if (!isChekingComment) {
      setReviewText(evt.target.value);
    }
  },[isChekingComment]);

  const handleRatingChange = useCallback((evt) => {
    if (!isChekingComment) {
      setRating(Number(evt.target.value));
    }
  }, [isChekingComment]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit} onChange={handleFormChange} onFocus={handleFormChange}>
      {isFormError && <ErrorNotification message={ErrorMessage.REVIEW_ERROR} />}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={rating === 5} onChange={handleRatingChange} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={rating === 4} onChange={handleRatingChange} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={rating === 3} onChange={handleRatingChange} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={rating === 2} onChange={handleRatingChange} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={rating === 1} onChange={handleRatingChange} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextChange} onFocus={handleTextChange} minLength={OfferPageSetting.MIN_REVIEW_LENGTH} maxLength={OfferPageSetting.MAX_REVIEW_LENGTH}
        value={review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  offerId: PropTypes.string,
};

export default CommentForm;
