import {Link} from 'react-router-dom';
import {Offer} from '../../mocks/offer';

type PlaceCardProps = {
  offer: Offer;
  onActiveCard: (offer: number) => void;
  activeCard: number;
}

function PlaceCard({offer, onActiveCard, activeCard}: PlaceCardProps): JSX.Element {
  const {id, photos, isPremium, price, header, type, isFavorite, rating} = offer;
  const favoriteClassName = `place-card__bookmark-button${isFavorite ? isFavorite && '--active button' : ' button'}`;
  const premiumClassname = `place-card__mark ${isPremium ? '' : 'visually-hidden'}`;

  return (
    <article
      className="cities__place-card place-card"
      id={String(id)}
      onMouseEnter={() => {
        onActiveCard(offer.id);
      }}
      onMouseLeave={() => {
        onActiveCard(0);
      }}
    >
      <div className={premiumClassname}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img
            className="place-card__image"
            src={photos[0]}
            width={260}
            height={200}
            alt=""
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={favoriteClassName}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>
            {header}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
