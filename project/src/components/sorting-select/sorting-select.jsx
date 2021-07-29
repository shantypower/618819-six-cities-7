import React from 'react';
import {SortTypes} from '../../const';
import PropTypes from 'prop-types';
import SortingSelectOption from '../sorting-select-option/sorting-select-option';

function SortingSelect({ handleSortTypeClick }) {
  const sortingOptions = Object.keys(SortTypes);

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortingOptions.map((option) => (
        <SortingSelectOption
          key={option}
          sortingType={option}
          handleSortTypeClick={handleSortTypeClick}
        />))}
    </ul>
  );
}

SortingSelect.propTypes = {
  handleSortTypeClick: PropTypes.func,
};


export default SortingSelect;
