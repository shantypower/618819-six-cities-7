import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import offerListItemProp from '../../components/offer-list-item/offer-list-item.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// eslint-disable-next-line no-unused-vars
const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map({offers, city, activeOfferId}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeOfferId) ? currentCustomIcon : defaultCustomIcon,
          });
        markers.addLayer(marker);
      });
      markers.addTo(map);
    }
    return () => {
      markers.clearLayers();
    };
  }, [map, offers, markers, activeOfferId]);

  return (
    <div className="cities__map map" style={{height: '100%'}} ref={mapRef}>
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    offerListItemProp,
  ),
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  activeOfferId: PropTypes.string,
};

export default Map;
