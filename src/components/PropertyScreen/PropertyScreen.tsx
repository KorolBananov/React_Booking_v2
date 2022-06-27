import Header from '../Header/Header';
import PropertyCardsList from '../PropertyCardsList/PropertyCardsList';
import Map from '../Map/Map';
import {AppRoute, AuthorizationStatus, MapClasses, MAX_PHOTOS_AMOUNT, propertyCardClasses} from '../../consts';
import {countRatingPercent, getMaxAmount} from '../../utils';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoriteStatusAction, fetchCurrentOfferAction, fetchNearbyOffersAction} from '../../store/apiActions';
import {getCurrentOffer, getNearbyOffers} from '../../store/appData/selector';
import {getAuthorizationStatus} from '../../store/userData/selector';
import {FavoriteStatusData} from '../../types/favoriteStatusData';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';
import Reviews from '../Reviews/Reviews';

function PropertyScreen(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const offer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  useEffect(() => {
    dispatch(fetchCurrentOfferAction(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(fetchNearbyOffersAction(params.id));
  }, [dispatch, params.id]);

  const handleClick = ({offerId, offerStatus}: FavoriteStatusData) => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(changeFavoriteStatusAction({
      offerId,
      offerStatus,
    }));
  };


  if (!offer) {
    return <NotFoundScreen />;
  }

  const {id, images, type, isPremium, title, rating, bedrooms, maxAdults, price, goods, host, description, isFavorite} = offer;

  const mapStyle = {width: '1144px', margin: '0 auto 50px'};

  return (
    <div className="page" data-testid="property-page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, getMaxAmount(offer.images.length, MAX_PHOTOS_AMOUNT)).map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt={type[0].toUpperCase() + type.slice(1)} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button onClick={(evt) => {
                  evt.preventDefault();
                  handleClick({offerId: id, offerStatus: Number(!isFavorite)});
                }} className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${countRatingPercent(rating)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type[0].toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <li key={good} className="property__inside-item">{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews />
            </div>
          </div>
          <Map className={MapClasses.PropertyPage} city={offer.city.name} points={nearbyOffers} activeOffer={offer} mapStyle={mapStyle}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PropertyCardsList className={propertyCardClasses.propertyPage} offers={nearbyOffers} onActiveChoose={()=> null}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
