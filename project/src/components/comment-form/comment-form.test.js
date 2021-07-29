import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CommentForm from './comment-form';
import { AuthorizationStatus } from '../../const';

describe('Component: CommentForm', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      hasPostedComment: false,
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {},
      },
      UI: {
        hasPostedComment: {
          hasPosted: true,
        },
      },
    });
    const { getByRole, getByText, getByLabelText } = render(
      <Provider store={store}>
        <CommentForm offerId={'2'}/>
      </Provider>,
    );
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(getByText(/50 characters/i)).toBeInTheDocument();
  });
});
