import React from 'react';
import {render} from '@testing-library/react';
import ReviewListItem from './review-list-item';


const testReview = {
  id: 1,
  comment: 'test comment',
  date: '2019-05-08T14:13:56.569Z',
  rating: 5,
  avatarUrl: 'test url',
  name: 'test name',
  isPro: false,
};

describe('Component: ReviewListItem', () => {
  it('should render correctly', () => {
    const {getByText, getByRole, getByTestId} = render(<ReviewListItem review={testReview} />);

    const commentElement = getByText('test comment');
    const nameElement = getByText('test name');
    const imageElement = getByRole('img', 'test url');
    const timeElement = getByTestId('reviews__time');

    expect(commentElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test url');
    expect(timeElement).toHaveTextContent('May 2019');
  });
});
