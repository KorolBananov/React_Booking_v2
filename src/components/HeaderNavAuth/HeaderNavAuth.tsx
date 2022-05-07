import {Link} from 'react-router-dom';
import {AppRoute, StorageKeyName} from '../../consts';
import {logoutAction} from '../../store/apiActions';
import {useAppDispatch} from '../../hooks';
import {getItem} from '../../services/storageService';

function HeaderNavAuth(): JSX.Element {

  const userEmail = getItem(StorageKeyName.UserEmail);
  const userAvatarUrl = getItem(StorageKeyName.UserAvatar);

  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites} data-testid="profile-link">
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
