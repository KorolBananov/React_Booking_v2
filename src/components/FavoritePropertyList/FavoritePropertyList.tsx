import {Offer} from '../../types/offer';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

type FavoritePropertyCardsProps = {
  offers: Offer[];
}

function FavoritePropertyList({offers}: FavoritePropertyCardsProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => <FavoriteCard key={offer.id} id={offer.id.toString()} offer={offer}/>)}
    </>
  );
}

export default FavoritePropertyList;
