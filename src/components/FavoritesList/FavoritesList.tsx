import FavoritePropertyList from '../FavoritePropertyList/FavoritePropertyList';
import { useAppSelector } from '../../hooks';
import { filterOffers } from '../../utils';
import { CITIES } from '../../consts';

function FavoritesList(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  return (
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const currentCityOffers = filterOffers(offers, city);
        if (filterOffers(offers, city).length > 0) {
          return (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritePropertyList offers={currentCityOffers} />
              </div>
            </li>
          );
        }

        return '';
      })}
    </ul>
  );
}

export default FavoritesList;
