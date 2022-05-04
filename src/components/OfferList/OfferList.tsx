import PlaceCard from '../PlaceCard/PlaceCard';
import {Offer, Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  onPlaceCardHover: (offer: Offer | null) => void;
  className: string;
}

function OffersList({offers, onPlaceCardHover, className}: OffersListProps):JSX.Element {
  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard
          key = {offer.id}
          offer={offer}
          onPlaceCardHover={onPlaceCardHover}
        />
      ))}
    </div>
  );
}

export default OffersList;
