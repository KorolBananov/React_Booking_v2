import Header from '../Header/Header';
import LocationsList from '../LocationList/LocationList';
import NoPlacesAvailable from '../NoPlacesAvailable/NoPlacesAvailable';
import { filterOffers } from '../../utils';
import { useAppSelector } from '../../hooks';
import {getOffers} from '../../store/appData/selector';
import {getCity} from '../../store/usingData/selector';
import PlacesContainer from '../PlaceContainer/PlacesContainer';

function MainScreen(): JSX.Element {

  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const filteredOffers = filterOffers(offers, city);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${filteredOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          {filteredOffers.length > 0 ? <PlacesContainer filteredOffers={filteredOffers}/> : <NoPlacesAvailable />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
