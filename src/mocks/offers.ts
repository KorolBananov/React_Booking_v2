import {Offers} from './offer';
import {Cities, OfferType} from '../consts';

export const offers: Offers = [
  {
    id: 0,
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
    city: Cities[3],
    photos: [
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
    ],
    isPremium: true,
    price: 120,
    header: 'Beautiful & luxurious studio at great location',
    description: '\n' +
      '\n' +
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.\n',
    type: OfferType.Room,
    isFavorite: false,
    rating: 4,
    bedroomsNumber: 1,
    maximumGuests: 2,
    amenities: [
      'wi-fi',
      'fridge',
    ],
    host: {
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4cbbb4232620ec4ca130f69e8d08aaa7cde43fa0_full.jpg',
      name: 'Alex Grin',
      isPro: true,
    },
    reviews: [
      {
        id: 0,
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4d/4d03deb82831169838714d9e5378a953374d9a93_full.jpg',
        name: 'Oleg',
        rate: 4,
        date: 'August 28',
        review: 'Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil...',
      },
    ],
  },
  {
    id: 1,
    coordinates: {
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
    city: Cities[3],
    photos: [
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
    ],
    isPremium: true,
    price: 230,
    header: 'Beautiful house at great location',
    description: '\n' +
      '\n' +
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.\n',
    type: OfferType.House,
    isFavorite: false,
    rating: 5,
    bedroomsNumber: 6,
    maximumGuests: 12,
    amenities: [
      'wi-fi',
      'TV',
      'fridge',
      'Parking',
    ],
    host: {
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4c9bc9ee1eb20ef9f14d11e865fc91cd2dee579b_full.jpg',
      name: 'Peter Silverstone',
      isPro: true,
    },
    reviews: [
      {
        id: 0,
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/13/136e8eaced31098ba53bf3c2999e2e1c04810899_full.jpg',
        name: 'Oleg',
        rate: 4,
        date: 'August 28',
        review: 'Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil...',
      },
    ],
  },
  {
    id: 2,
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
    city: Cities[3],
    photos: [
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
    ],
    isPremium: false,
    price: 95,
    header: 'Low cost hotel at beautiful location',
    description: '\n' +
      '\n' +
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.\n',
    type: OfferType.Hotel,
    isFavorite: true,
    rating: 3,
    bedroomsNumber: 1,
    maximumGuests: 2,
    amenities: [
      'TV',
    ],
    host: {
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4cd479ce6c1b3120d284686c7a3de63a91e9f06b_full.jpg',
      name: 'Andrea',
      isPro: false,
    },
    reviews: [
      {
        id: 0,
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4cefcd58f04534d5bcec2b8829c500e9e239e23a_full.jpg',
        name: 'Oleg',
        rate: 4,
        date: 'August 28',
        review: 'Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil...',
      },
    ],
  },
  {
    id: 3,
    coordinates: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
    city: Cities[3],
    photos: [
      'https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200',
      'https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200',
      'https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200',
      'https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200',
      'https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200',
      'https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200',
    ],
    isPremium: true,
    price: 295,
    header: 'Luxurious Apartment at great location at beautiful location',
    description: '\n' +
      '\n' +
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.\n',
    type: OfferType.Apartment,
    isFavorite: false,
    rating: 4,
    bedroomsNumber: 2,
    maximumGuests: 6,
    amenities: [
      'TV',
      'Washing machine',
      'Coffee machine ',
    ],
    host: {
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4cd6e5de60fc7cc7ce85a0e7dbb9cb55e1cc30f4_full.jpg',
      name: 'Max',
      isPro: false,
    },
    reviews: [
      {
        id: 0,
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4d/4d033ad9c9b9a883f33b4d9b3e5781e6ad873e80_full.jpg',
        name: 'Oleg',
        rate: 4,
        date: 'August 28',
        review: 'Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil...',
      },
    ],
  },
];

export  const neighbourhoodOffers: Offers = [
  {
    id: 0,
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
    city: Cities[0],
    photos: [
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5acd08ff5aee62f99d025e731970e2cb-5670589-images-thumbs&n=13',
    ],
    isPremium: true,
    price: 120,
    header: 'Beautiful & luxurious studio at great location',
    description: '\n' +
      '\n' +
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.\n',
    type: OfferType.Room,
    isFavorite: false,
    rating: 4,
    bedroomsNumber: 1,
    maximumGuests: 2,
    amenities: [
      'wi-fi',
      'fridge',
    ],
    host: {
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4cbbb4232620ec4ca130f69e8d08aaa7cde43fa0_full.jpg',
      name: 'Alex Grin',
      isPro: true,
    },
    reviews: [
      {
        id: 0,
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4d/4d03deb82831169838714d9e5378a953374d9a93_full.jpg',
        name: 'Oleg',
        rate: 4,
        date: 'August 28',
        review: 'Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil...',
      },
    ],
  },
  {
    id: 1,
    coordinates: {
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
    city: Cities[0],
    photos: [
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
      'https://i.pinimg.com/originals/68/8e/32/688e32cd90dbb711edc5812f7d05975d.jpg',
    ],
    isPremium: true,
    price: 230,
    header: 'Beautiful house at great location',
    description: '\n' +
      '\n' +
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.\n',
    type: OfferType.House,
    isFavorite: false,
    rating: 5,
    bedroomsNumber: 6,
    maximumGuests: 12,
    amenities: [
      'wi-fi',
      'TV',
      'fridge',
      'Parking',
    ],
    host: {
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4c9bc9ee1eb20ef9f14d11e865fc91cd2dee579b_full.jpg',
      name: 'Peter Silverstone',
      isPro: true,
    },
    reviews: [
      {
        id: 0,
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/13/136e8eaced31098ba53bf3c2999e2e1c04810899_full.jpg',
        name: 'Oleg',
        rate: 4,
        date: 'August 28',
        review: 'Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil...',
      },
    ],
  },
  {
    id: 2,
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
    city: Cities[0],
    photos: [
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
      'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1490958815/kkofaeofhmpw57956lq6/morris-adjmi-architects-mark-mahaney-matthew-williams-jimi-billingsley-wythe-hotel.jpg',
    ],
    isPremium: false,
    price: 95,
    header: 'Low cost hotel at beautiful location',
    description: '\n' +
      '\n' +
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n' +
      '\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.\n',
    type: OfferType.Hotel,
    isFavorite: true,
    rating: 3,
    bedroomsNumber: 1,
    maximumGuests: 2,
    amenities: [
      'TV',
    ],
    host: {
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4cd479ce6c1b3120d284686c7a3de63a91e9f06b_full.jpg',
      name: 'Andrea',
      isPro: false,
    },
    reviews: [
      {
        id: 0,
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4c/4cefcd58f04534d5bcec2b8829c500e9e239e23a_full.jpg',
        name: 'Oleg',
        rate: 4,
        date: 'August 28',
        review: 'Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil...',
      },
    ],
  },
];
