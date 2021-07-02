import React, {useState} from 'react';
import SortingSelect from '../../components/sorting-select/sorting-select';
import {connect} from 'react-redux';


// eslint-disable-next-line react/prop-types
function LocationsSortingForm({ activeSortType }) {
  const [isSortOpen, toggleIsSortActive] = useState(false);

  const handleSortTypeClick = () => {
    toggleIsSortActive((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleSortTypeClick}
      >
        { activeSortType }
        <svg className="places__sorting-arrow" style={{width: '7', height: '4'}}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isSortOpen && <SortingSelect handleSortTypeClick={handleSortTypeClick}/>}
    </form>
  );
}


const mapStateToProps = ({ activeSortType}) =>({
  activeSortType: activeSortType,
});


export { LocationsSortingForm };
export default connect(mapStateToProps)(LocationsSortingForm);
