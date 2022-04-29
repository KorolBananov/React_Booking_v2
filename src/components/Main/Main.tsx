import Locations from '../Locations/Locations';
import Map from '../Map/Map';
import Header from '../Header/Header';
import {Offer} from '../../mocks/offer';
import OfferList from '../OfferList/OfferList';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {MAP_HEIGHT} from '../../consts';
import Sort from '../Sort/Sort';
import {getSortedOffers} from '../../store/selectors';

function Main(): JSX.Element {
  const {currentCity} = useAppSelector((state) => state);
  const sortedOffers = useAppSelector(getSortedOffers);
  const [activeCard, setActiveCard] = useState< Offer | null>(
    null,
  );

  const onListItemHover = (id: string) => {
    const currentOffer = sortedOffers.find((offer) => String(offer.id) === id);
    setActiveCard(currentOffer ?? null);
  };
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Locations/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <Sort />
              </form>
              <OfferList offers={sortedOffers} onListItemHover={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {
                  <Map
                    key={JSON.stringify(currentCity.location.lng + currentCity.location.lat)}
                    city={currentCity}
                    offers={sortedOffers}
                    activeCard={activeCard}
                    height={MAP_HEIGHT}
                  />
                }
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
