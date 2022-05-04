import {MouseEvent} from 'react';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/userProcess/selectors';
import {AuthorizationStatus} from '../../consts';

const ButtonSize = {
  SMALL: {
    width: '18',
    height: '19',
  },
  BIG: {
    width: '31',
    height: '33',
  },
};

type BookmarkButtonProps = {
  isFavorite: boolean,
  isSmall: boolean,
  prefix: string,
  handleBookmarkButtonClick: (evt: MouseEvent<HTMLButtonElement>) => void,
}

function BookmarkButton({ handleBookmarkButtonClick, isFavorite, isSmall, prefix }: BookmarkButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <button
      className={`${prefix}__bookmark-button ${isFavorite && isAuth ?  `${prefix  }__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleBookmarkButtonClick}
    >
      <svg
        className={`${prefix}__bookmark-icon`}
        width={isSmall ? ButtonSize.SMALL.width : ButtonSize.SMALL.height}
        height={isSmall ? ButtonSize.BIG.width : ButtonSize.BIG.height}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
