import React, {useRef} from 'react';
import Header from '../../components/header/header';
import PropTypes from 'prop-types';
import {login} from '../../store/api-actions';
import {connect} from 'react-redux';
import {Routes} from '../../const';
import { useHistory } from 'react-router-dom';

function LoginPage({onSubmit, authorizationStatus}) {
  const loginRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value.trim(),
    });
    history.push(Routes.ROOT);
  };

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" ref={loginRef} type="email" name="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" ref={passwordRef} type="password" name="password" placeholder="Password" required=""/>
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

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export {LoginPage};
export default connect(null, mapDispatchToProps)(LoginPage);
