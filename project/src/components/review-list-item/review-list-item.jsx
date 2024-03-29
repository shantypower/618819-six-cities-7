import React from 'react';
import reviewListItemProp from './review-list-item.prop';
import {formatDate} from '../../utils/common';
function ReviewListItem(props) {

  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatarUrl} width="54" height="54" alt={`Reviews avatar - ${review.id}`}/>
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: review.rating*100/5}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24" data-testid="reviews__time">{formatDate(review.date)}</time>
      </div>
    </li>
  );
}

ReviewListItem.propTypes = {
  review: reviewListItemProp,
};

export default ReviewListItem;
