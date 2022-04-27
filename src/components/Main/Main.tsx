import Header from '../Header/Header';
import Map from '../Map/Map';
import Locations from '../Locations/Locations';
import Sort from '../Sort/Sort';
import OfferList from '../OfferList/OfferList';
import {Offers} from '../../mocks/offer';

type MainProps = {
  offers: Offers;
}

function Main({offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Locations />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <Sort />
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList />
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
