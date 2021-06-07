import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  offers: [
    {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 1,
      'images': ['img/.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': true,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/apartment-01.jpg',
      'price': 120,
      'rating': 5,
      'title': 'Beautiful & luxurious apartment at great location',
      'type': 'Apartment',
    },
    {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 2,
      'images': ['img/1.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/room.jpg',
      'price': 80,
      'rating': 3,
      'title': 'Wood and stone place',
      'type': 'Private room',
    },
    {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 3,
      'images': ['img/1.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/apartment-02.jpg',
      'price': 132,
      'rating': 5,
      'title': 'Canal View Prinsengracht',
      'type': 'Apartment',
    },
    {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 4,
      'images': ['img/1.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': true,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/apartment-03.jpg',
      'price': 180,
      'rating': 1,
      'title': 'Nice, cozy, warm big bed apartment',
      'type': 'Apartment',
    },
    {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 5,
      'images': ['img/1.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/room.jpg',
      'price': 80,
      'rating': 2,
      'title': 'Wood and stone place',
      'type': 'Private room',
    },
  ],
  offersQuantity: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App offers = {Settings.offers} offersQuantity = {Settings.offersQuantity}/>
  </React.StrictMode>,
  document.getElementById('root'));
