import React from 'react';
import PropTypes from 'prop-types';

function LocationsListItem({ name , isActive, onClick }) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        onClick={onClick}
        href="/#"
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
