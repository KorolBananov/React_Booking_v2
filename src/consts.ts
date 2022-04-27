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
