import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortTypes} from '../../const';
import {ActionCreator} from '../../store/action';


// eslint-disable-next-line react/prop-types
function SortingSelectOption({ sortingType, activeSortType, handleSortTypeClick, setSortType}) {

  const handleSortOptionClick = () => {
    setSortType(SortTypes[sortingType]);
    handleSortTypeClick();
  };

  return (
    <li
      className={`places__option ${SortTypes[sortingType] === activeSortType ? 'places__option--active' : ''}`}
      tabIndex="0"
      data-sort={sortingType}
      onClick={handleSortOptionClick}
    >
      {SortTypes[sortingType]}
    </li>
  );
}

SortingSelectOption.propTypes = {
  sortingType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType,
});


const mapDispatchToProps = (dispatch) => ({
  setSortType: (sortingType) => dispatch(ActionCreator.setSortType(sortingType)),
});


export {SortingSelectOption};
export default connect(mapStateToProps, mapDispatchToProps)(SortingSelectOption);