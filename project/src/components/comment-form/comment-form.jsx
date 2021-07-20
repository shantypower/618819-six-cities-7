import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';


function CommentForm({ offerId, hasPostedComment }) {

  const [rating, setRating] = useState(0);
  const [review, setReviewText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);


  const dispatch = useDispatch();

  const handleFormChange = (evt) => {
    setIsDisabled(!(review.length >= MIN_REVIEW_LENGTH
      && review.length <= MAX_REVIEW_LENGTH
      && rating > 0));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    dispatch(sendComment({id: offerId, comment: review, rating: rating}))
      .then(() => {
        if (hasPostedComment.hasPosted) {
          setReviewText('');
          setRating(0);
        } else {
          setReviewText(hasPostedComment.comment);
          setRating(hasPostedComment.rating);
        }
      })
      .catch(() => {
        setReviewText(review);
        setRating(rating);
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit} onChange={handleFormChange}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={(evt) => setRating(Number(evt.target.value))} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={(evt) => setRating(Number(evt.target.value))} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue = '' onChange={(evt) => setReviewText(evt.target.value)} minLength={MIN_REVIEW_LENGTH} maxLength={MAX_REVIEW_LENGTH}
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
  offerId: PropTypes.string.isRequired,
  hasPostedComment: PropTypes.shape({
    hasPosted: PropTypes.bool,
    comment: PropTypes.string,
    rating: PropTypes.number,
  }),
};

const mapStateToProps = (state) => ({
  hasPostedComment: state.hasPostedComment,
});

export {CommentForm};
export default connect(null, mapStateToProps)(CommentForm);
