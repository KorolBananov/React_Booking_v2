import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/userProcess/selectors';
import {useState} from 'react';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {redirectToRoute} from '../../store/action';
import {fetchFavoriteOffers, fetchOffersAction, toggleFavoriteAction} from '../../store/api-actions';
import {ratingWidth} from '../../utils';
import BookmarkButton from '../BookmarkButton/BookmarkButton';

type PlaceCardProps = {
  offer: Offer;
  onPlaceCardHover: (offer: Offer | null) => void;
}

function PlaceCard({offer, onPlaceCardHover}: PlaceCardProps): JSX.Element {
  const {id, previewImage, isPremium, price, title, type, isFavorite, rating} = offer;
  const premiumClassname = `place-card__mark ${isPremium ? '' : 'visually-hidden'}`;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isOfferFavorite, setToggleFavorite] = useState(offer.isFavorite);
  const dispatch = useAppDispatch();
  const postFavoriteFlag = offer.isFavorite ? 0 : 1;

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }
    dispatch(toggleFavoriteAction({
      id: offer.id,
      flag: postFavoriteFlag,
    }));

    setToggleFavorite(!isOfferFavorite);

    dispatch(fetchOffersAction());
    dispatch(fetchFavoriteOffers());
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver = {() => onPlaceCardHover(offer)}
      onMouseOut = {() => onPlaceCardHover(null)}
    >
      <div className={premiumClassname}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton
            isFavorite={isFavorite}
            handleBookmarkButtonClick={handleFavoriteClick}
            isSmall
            prefix={'place-card'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
