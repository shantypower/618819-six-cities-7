import React, {useRef, useState} from 'react';
import Header from '../../components/header/header';
import {signin} from '../../store/api-actions';
import { useDispatch } from 'react-redux';
import {Routes} from '../../const';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const loginRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  /*   let isPasswordError = false;
  let isLoginError = false; */

  const [isLoginError, setIsLoginError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleFromSubmit = (evt) => {
    evt.preventDefault();
    const regularExpression = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,6}$/i;
    const login = loginRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const isValidEmail = regularExpression.test(login);
    if (!isValidEmail) {
      setIsLoginError(true);
    } else if (password.length === 0) {
      setIsPasswordError(true);
    } else {
      dispatch(signin({
        login: loginRef.current.value,
        password: passwordRef.current.value.trim(),
      }));
      history.push(Routes.ROOT);
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFromSubmit}>
              {isLoginError && (
                <div className="login__input-wrapper form__input-wrapper">
                  <span style={{color: 'red'}}>
                  Enter valid email!
                  </span>
                </div>
              )}
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input className="login__input form__input" ref={loginRef} type="email" name="email" placeholder="Email" required id="email" data-testid="email"/>
              </div>
              {isPasswordError && (
                <div className="login__input-wrapper form__input-wrapper">
                  <span style={{color: 'red'}}>
                  Empty password not allowed!
                  </span>
                </div>
              )}
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input className="login__input form__input" ref={passwordRef} type="password" name="password" placeholder="Password" required id="password" data-testid="password"/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
