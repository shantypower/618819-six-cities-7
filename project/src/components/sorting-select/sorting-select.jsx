import React from 'react';
import {SortType} from '../../const';
import PropTypes from 'prop-types';
import SortingSelectOption from '../sorting-select-option/sorting-select-option';

function SortingSelect({ handleSortTypeClick }) {
  const sortingOptions = Object.keys(SortType);

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
