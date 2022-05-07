import Header from '../Header/Header';
import FavoriteEmpty from '../FavoriteEmpty/FavoriteEmpty';
import FavoritesList from '../FavoritesList/FavoritesList';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {fetchFavoriteOffersAction} from '../../store/apiActions';
import {useEffect} from 'react';
import {getFavoriteOffers} from '../../store/appData/selector';
import {CITIES} from '../../consts';

function FavoritesScreen(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className={`page ${favoriteOffers.length === 0 && 'page--favorites-empty'}`}>
      <Header />
      {favoriteOffers.length > 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList favoriteOffers={favoriteOffers} cities={CITIES}/>
            </section>
          </div>
        </main> : <FavoriteEmpty />}
      <footer className={`footer ${favoriteOffers.length > 0 && 'container'}`}>
        <a className="footer__logo-link" href="./" data-testid="footer-logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
