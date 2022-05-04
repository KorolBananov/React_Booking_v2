import Header from '../Header/Header';
import OfferList from '../OfferList/OfferList';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  getCurrentOffer,
  getCurrentOfferComments,
  getCurrentOffersNearby,
  getLoadedDataStatus
} from '../../store/offersData/selectors';
import {useParams} from 'react-router-dom';
import {store} from '../../store';
import {fetchCurrentOffer, fetchCurrentOfferComments, fetchNearbyOffersAction} from '../../store/api-actions';
import NotFound from '../NotFound/NotFound';
import PlaceProperty from '../PlaceProperty/PlaceProperty';
import {Offer} from '../../types/offer';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function Room():JSX.Element {
  const dispatch = useAppDispatch();

  const [, setSelectedPoint] = useState<Offer | null>(null);

  const onPlaceCardHover = (offer: Offer | null) => {
    setSelectedPoint(offer);
  };

  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getCurrentOfferComments);
  const nearbyOffers = useAppSelector(getCurrentOffersNearby);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  const {id} = useParams<{id: string}>();

  useEffect(() => {
    store.dispatch(fetchCurrentOffer(Number(id)));
    store.dispatch(fetchCurrentOfferComments(Number(id)));
    store.dispatch(fetchNearbyOffersAction(Number(id)));

  }, [dispatch, id]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!currentOffer) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        {(
          <>
            <PlaceProperty currentOffer={currentOffer} reviews={reviews} nearbyOffers={nearbyOffers}/>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OfferList className="near-places__list places__list" offers={nearbyOffers}
                  onPlaceCardHover={onPlaceCardHover}
                />
              </section>
            </div>
          </>
        )}
      </main>

    </div>
  );
}

export default Room;
