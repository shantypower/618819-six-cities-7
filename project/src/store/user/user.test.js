import {user} from './user';

import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const state = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
};

describe('Reducer: user', () => {

  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({...state});
  });
  it('should update user state with the given data', () => {

    const userData = {
      avatarUrl: '/img/2.jpg',
      email: 'test@test.com',
      id: 1,
      isPro: true,
      name: 'test',
    };

    const setUserAction = {
      type: ActionType.SET_USER,
      payload: userData,
    };

    expect(user(state, setUserAction))
      .toEqual({...state, user: {
        avatarUrl: '/img/2.jpg',
        email: 'test@test.com',
        id: 1,
        isPro: true,
        name: 'test',
      },
      });
  });

  it('should change authorizationStatus to "AUTH"', () => {

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should set auth status to "NO_AUTH" when logout action happened', () => {
    const currentState = {
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {
        avatarUrl: '/img/2.jpg',
        email: 'test@test.com',
        id: 1,
        isPro: true,
        name: 'test',
      },
    };

    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(currentState, logoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: false,
          name: '',
        },
      });
  });
});
