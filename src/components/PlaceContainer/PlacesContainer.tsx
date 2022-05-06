import {Offer} from '../../types/offer';
import {useCallback, useState} from 'react';
import {MapClasses, propertyCardClasses, SortingOptionsValues} from '../../consts';
import {useAppSelector} from '../../hooks';
import {getCity} from "../../store/usingData/selector";
import PropertyCardsList from '../PropertyCardsList/PropertyCardsList';
import SortOptions from '../SortOptions/SortOptions';
import Map from '../Map/Map';

type PlacesContainerProps = {
  filteredOffers: Offer[];
}

function PlacesContainer({filteredOffers}: PlacesContainerProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const [sortingOption, setSortingOption] = useState(SortingOptionsValues.Popular);
  const city = useAppSelector(getCity);
  const handleActiveOfferChoose = useCallback((offer: Offer | null) => setActiveOffer(offer), []);
  const handleSortingOptionChoose = useCallback((option: string) => setSortingOption(option), []);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredOffers.length} {filteredOffers.length > 1 ? 'places' : 'place'}  to stay in {city}</b>
        <SortOptions sortingOption={sortingOption} onOptionChange={handleSortingOptionChoose} />
        <div className="cities__places-list places__list tabs__content">
          <PropertyCardsList className={propertyCardClasses.mainPage} offers={filteredOffers} onActiveChoose={handleActiveOfferChoose} sortingOption={sortingOption} />
        </div>
      </section>
      <div className="cities__right-section">
        <Map key={city} className={MapClasses.MainPage} city={city} points={filteredOffers} activeOffer={activeOffer} />
      </div>
    </div>
  );
}

export default PlacesContainer;
