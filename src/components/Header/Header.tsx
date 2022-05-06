import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import HeaderNavNoAuth from '../HeaderNavNoAuth/HeaderNavNoAuth';
import HeaderNavAuth from '../HeaderNavAuth/HeaderNavAuth';
import { AuthorizationStatus } from '../../consts';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/userData/selector';
import {memo} from 'react';

function Header(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {authorizationStatus === AuthorizationStatus.Auth ? <HeaderNavAuth/> : <HeaderNavNoAuth/>}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
