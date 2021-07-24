import React from 'react';


function Spinner() {
  return (
    <div className="spinner__wrapper">
      <img className="spinner__img" src="/img/spinner.svg" alt="Wait. It's loading.." data-testid="preloader" />
    </div>
  );
}


export default Spinner;
