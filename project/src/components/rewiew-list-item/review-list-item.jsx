import React from 'react';
import reviewListItemProp from '../rewiew-list-item/review-list-item.prop';
function ReviewListItem(props) {

  const {review} = props;

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
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating(review.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

ReviewListItem.propTypes = {
  review: reviewListItemProp.isRequired,
};

export default ReviewListItem;
