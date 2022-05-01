import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {changeCity} from '../../store/action';
import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';


function Locations(): JSX.Element {
  const {cities, currentCity} = useAppSelector((state) => state);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          className="locations__item"
          key={city.name}
          id={city.name}
          onClick={() => {store.dispatch(changeCity(city));}}
        >
          <Link
            className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : ''}`}
            to={AppRoute.Main}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Locations;
