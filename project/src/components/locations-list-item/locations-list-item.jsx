import React from 'react';
import PropTypes from 'prop-types';

function LocationsListItem({ name , isActive, onClick }) {
  return (
    <li className="locations__item" data-testid="locations-item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        onClick={onClick}
        href="/#"
        data-testid={`locations__item-link-${name}`}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}


LocationsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default LocationsListItem;
