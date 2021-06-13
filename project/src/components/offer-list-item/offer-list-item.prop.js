import PropTypes from 'prop-types';

export default PropTypes.shape({
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
  goods: PropTypes.array,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;
