import FavoritesCard from '../FavoritesCard/FavoritesCard';
import {Offers} from '../../types/offer';

type FavoritesListProps = {
  offers: Offers;
}

function FavoritesList({offers}:FavoritesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoritesCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
