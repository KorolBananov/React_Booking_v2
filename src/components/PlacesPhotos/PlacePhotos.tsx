import {Offer} from '../../types/offer';

type PlacePhotosProps = {
  offer: Offer;
};

const MAX_PHOTOS = 6;

function PlacePhotos({offer}: PlacePhotosProps): JSX.Element {

  const cutPhotosQuantity = offer.images.slice(0, MAX_PHOTOS);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          cutPhotosQuantity.map((imageUrl: string , id: number) => {
            const keyValue = id + imageUrl;
            return (
              <div key = {keyValue} className="property__image-wrapper">
                <img className="property__image" src={imageUrl} alt="room_photo"/>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default PlacePhotos;
