import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';
import {getHasPostedComment} from '../../store/ui/selectors';

function CommentForm({offerId}) {
  const reviewInitialState = {
    charsCount: 0,
    textReview: '',
    starRating: '5',
  }
  const [review, setReview] = useState(reviewInitialState)

  const checkReviewValidation = (review) => {
    const charsCount = review.charsCount;
    return charsCount >= MIN_REVIEW_LENGTH && charsCount <= MAX_REVIEW_LENGTH;
  };

  const hasPostedComment = useSelector(getHasPostedComment);

  const dispatch = useDispatch();

  const handleFormChange = (evt) => {
    setReview({...review, starRating: evt.target.value});
    evt.target.checked = ((review.starRating === evt.target.value.toString()) ? 'checked' : '');
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendComment({id: offerId, comment: review.textReview, rating: review.starRating})).then(() =>{
      if (hasPostedComment.hasPosted) {
        setReview(reviewInitialState);
      }
    })
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {['5', '4', '3', '2', '1'].map((index) => (
          <React.Fragment key={index}>
            <input onChange={handleFormChange} className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" checked={review.starRating === index ? 'checked' : false}
            />
            <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                onChange={(evt) => {
                  setReview({...review, charsCount: evt.target.value.length, textReview: evt.target.value});
                }} minLength={MIN_REVIEW_LENGTH} maxLength={MAX_REVIEW_LENGTH}
                value={review.textReview}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
                disabled={!checkReviewValidation(review) ? 'disabled' : ''}>Submit
        </button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  offerId: PropTypes.string,
};

export default CommentForm;
