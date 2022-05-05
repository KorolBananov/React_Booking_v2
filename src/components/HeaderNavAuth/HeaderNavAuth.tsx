import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {getUserEmail} from '../../services/userEmail';
import {getUserAvatarUrl} from '../../services/userAvatar';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

function HeaderNavAuth(): JSX.Element {

  const userEmail = getUserEmail();
  const userAvatarUrl = getUserAvatarUrl();

  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage:`url(${userAvatarUrl})`}}>
            </div>
            <span className="header__user-name user__name">{userEmail}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }} className="header__nav-link" to={AppRoute.Root}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavAuth;
