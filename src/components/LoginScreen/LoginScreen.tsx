import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, CITIES} from '../../consts';
import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/apiActions';
import Header from '../Header/Header';
import {getRandomInteger} from '../../utils';
import {toast} from 'react-toastify';
import {changeCity} from '../../store/usingData/usingData';

function LoginScreen(): JSX.Element {
  const randomCity = CITIES[getRandomInteger(0, CITIES.length - 1)];
  const validatePassword = (password: string) => password.match(/[A-Za-z]/) !== null && password.match(/[0-9]/) !== null;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      validatePassword(passwordRef.current.value) ?
        dispatch(loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })) : toast.error('Password must contain a letter and number');
    }
  };

  const handleClick = (city: string) => {
    dispatch(changeCity(city));
    navigate(AppRoute.Root);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link onClick={(evt) => {
                evt.preventDefault();
                handleClick(randomCity);
              }} className="locations__item-link" to={AppRoute.Root} data-testid="city-link"
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
