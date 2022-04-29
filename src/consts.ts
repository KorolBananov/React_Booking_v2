export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Main = '/',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum OfferType {
  Apartment = 'Apartment',
  Room = 'Room',
  House = 'House',
  Hotel = 'Hotel',
}

export enum CityName {
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
}

export const Cities = [
  {
    name: CityName.Paris,
    location: {
      lat: 48.85661,
      lng: 2.351499,
      zoom: 12,
    },
  },
  {
    name: CityName.Cologne,
    location: {
      lat: 50.938361,
      lng: 6.959974,
      zoom: 12,
    },
  },
  {
    name: CityName.Brussels,
    location: {
      lat: 50.846557,
      lng: 4.351697,
      zoom: 12,
    },
  },
  {
    name: CityName.Amsterdam,
    location: {
      lat: 52.37454,
      lng: 4.897976,
      zoom: 12,
    },
  },
  {
    name: CityName.Hamburg,
    location: {
      lat: 53.550341,
      lng: 10.000654,
      zoom: 12,
    },
  },
  {
    name: CityName.Dusseldorf,
    location: {
      lat: 51.225402,
      lng: 6.776314,
      zoom: 12,
    },
  },
];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum SortTypes {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  RatingLowToHigh = 'Top rated first',
}
export const MAP_HEIGHT = '1158px';

export const PROPERTY_MAP_HEIGHT = '579px';

