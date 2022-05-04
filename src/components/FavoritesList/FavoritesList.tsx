import FavoritesCard from '../FavoritesCard/FavoritesCard';
import {Favorite} from '../../types/favorite';

type FavoritesListProps = {
  favoriteOffers: Favorite[];
}

function FavoritesList({favoriteOffers}:FavoritesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {favoriteOffers.map((offer) => (
        <FavoritesCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
